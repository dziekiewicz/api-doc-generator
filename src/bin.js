#!/usr/bin/env node

require('babel-register')({
  presets: ['es2015'],
  only: `${__dirname}`,
});

const apiDocGenerator = require('./').default;
const yargs = require('yargs');

const argv = yargs
  .usage('REST API Documentation generator\n\nUsage: $0 [options]')
  .help('help')
  .alias('help', 'h')
  .alias('title', 't')
  .alias('input', 'i')
  .alias('output', 'o')
  .default('title', '')
  .default('input', 'index.js')
  .default('output', 'api-doc-generator')
  .options({
    title: {
      description: 'Provide the document title',
    },
    input: {
      description: 'Provide input file',
    },
    output: {
      description: 'Provide output directory',
    },
  })
  .strict().argv;

apiDocGenerator(argv);
