#!/usr/bin/env node

'use strict';

var apiDocsGenerator = require('./');
var yargs = require('yargs');

var argv = yargs
  .usage('REST API Documentation generator\n\nUsage: $0 [options]')
  .help('help')
  .alias('help', 'h')
  .default('title', '')
  .default('input', 'index.js')
  .default('output', 'api-docs-generator')
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

apiDocsGenerator(argv);