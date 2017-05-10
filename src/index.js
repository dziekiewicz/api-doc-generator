import fs from 'fs';
import fse from 'fs-extra';
import dox from 'dox';
import handlebars from 'handlebars';

function readFiles(options) {
  return fs.readFileSync(options.input, 'utf8');
}

function parseComments(file) {
  return dox.parseComments(file);
}

function groupComments(comments) {
  const entries = [];

  comments.forEach((comment) => {
    const entry = {
      description: comment.description.full,
      parameters: [],
    };

    comment.tags.forEach((tag) => {
      if (tag.type === 'param' && tag.name) {
        entry.parameters.push({
          name: tag.name,
          types: tag.types.length > 0 ? tag.types.join('|') : '*',
          required: !tag.optional,
        });
      } else {
        entry[tag.type] = tag.string;
      }
    });

    entries.push(entry);
  });

  const sections = {};

  entries.forEach((entry) => {
    if (!{}.hasOwnProperty.call(sections, entry.section)) {
      sections[entry.section] = {
        name: entry.section,
        endpoints: [],
      };
    }

    sections[entry.section].endpoints.push(entry);
  });

  return Object.keys(sections).sort((a, b) => a.localeCompare(b)).map(key => sections[key]);
}

function compileTemplate(sections, options) {
  const variables = {
    title: [options.title, 'REST API Documentation'].join(' '),
    sections,
  };

  const source = fs.readFileSync(`${__dirname}/template.html`).toString();
  const template = handlebars.compile(source);
  const html = template(variables);

  fse.ensureDirSync(options.output);
  fs.writeFileSync(`${options.output}/index.html`, html);
}

function copyAssets(options) {
  fse.copy(`${__dirname}/../dist`, options.output);
}

export default function (options) {
  const file = readFiles(options);
  const comments = parseComments(file);
  const sections = groupComments(comments);

  compileTemplate(sections, options);
  copyAssets(options);
}
