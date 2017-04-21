#!/usr/bin/env node

'use strict';

var apiDocGenerator = require('./');
var yargs = require('yargs');

var argv = yargs
  .usage('REST API Documentation generator\n\nUsage: $0 [options]')
  .help('help')
  .alias('help', 'h')
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