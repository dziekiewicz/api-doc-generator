var fs = require('fs');
var fse = require('fs-extra');
var dox = require('dox');
var handlebars = require('handlebars');

function readFiles(options) {
  return fs.readFileSync(options.input, 'utf8');
}

function parseComments(file) {
  return dox.parseComments(file);
}

function groupComments(comments) {
  var entries = [];

  comments.forEach(function(comment) {
    var entry = {
      description: comment.description.full,
      parameters: [],
    };

    comment.tags.forEach(function(tag) {
      if (tag.type === 'param' && tag.name) {
        entry.parameters.push({
          name: tag.name,
          types: tag.types.length > 0 ? tag.types.join('|') : '*',
          required: !tag.optional
        });
      } else {
        entry[tag.type] = tag.string;
      }
    });

    entries.push(entry);
  });

  var sections = {};

  entries.forEach(function(entry) {
    if (!{}.hasOwnProperty.call(sections, entry.section)) {
      sections[entry.section] = {
        name: entry.section,
        endpoints: [],
      };
    }

    sections[entry.section].endpoints.push(entry);
  });

  return Object.keys(sections).sort(function(a, b) {
    return a.localeCompare(b);
  }).map(function(key) {
    return sections[key];
  });
}

function compileTemplate(sections, options) {
  var variables = {
    title: [options.title, 'REST API Documentation'].join(' '),
    sections: sections
  };

  var source = fs.readFileSync(__dirname + '/src/template.html').toString();
  var template = handlebars.compile(source);
  var html = template(variables);

  fse.ensureDirSync(options.output);
  fs.writeFileSync(options.output + '/index.html', html);
}

function copyAssets(options) {
  fse.copy(__dirname + '/dist', options.output);
}

function apiDocsGenerator(options) {
  var file = readFiles(options);
  var comments = parseComments(file);
  var sections = groupComments(comments);

  compileTemplate(sections, options);
  copyAssets(options);
}

module.exports = apiDocsGenerator;