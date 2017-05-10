import fs from 'fs';
import path from 'path';
import test from 'ava';

const dist = path.join(__dirname, '../../dist');

test.before('`dist` path should be created', context => context.true(fs.lstatSync(dist).isDirectory()));

test('`api-doc-generator.min.css` should be created', (context) => {
  fs.readdirSync(dist).map((file) => {
    if (file === 'api-doc-generator.min.css') {
      context.is(file, 'api-doc-generator.min.css');
    }

    return null;
  });
});

test('`api-doc-generator.min.js` should be created', (context) => {
  fs.readdirSync(dist).map((file) => {
    if (file === 'api-doc-generator.min.js') {
      context.is(file, 'api-doc-generator.min.js');
    }

    return null;
  });
});

test('`api-doc-generator.min.js` should be created', (context) => {
  fs.readdirSync(dist).map((file) => {
    if (file === 'api-doc-generator.min.js') {
      context.is(file, 'api-doc-generator.min.js');
    }

    return null;
  });
});
