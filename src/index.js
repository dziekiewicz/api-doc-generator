import fs from 'fs';
import fse from 'fs-extra';
import dox from 'dox';
import handlebars from 'handlebars';

function parseComments(options) {
  var isDirectory = fs.lstatSync(options.input).isDirectory();
  if(!isDirectory){
    let file = fs.readFileSync(options.input, 'utf8');
    var comments = dox.parseComments(file);
  } else {
    var files = [];
    var comments = [];
    walkSync(options.input, files);
    files.map(file => {
      let fileContent = fs.readFileSync(file, 'utf8');
      let fileComments = dox.parseComments(fileContent);
      comments = fileComments.concat(comments)
    })
  }
  return comments;
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

var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(dir + '/' + file);
    }
  });
  return filelist;
};

export default function (options) {
  const comments = parseComments(options);
  const sections = groupComments(comments);

  compileTemplate(sections, options);
  copyAssets(options);
}
