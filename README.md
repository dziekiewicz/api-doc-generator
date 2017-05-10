API Docs Generator
==================

[![Travis Status](https://travis-ci.org/dzekevis/api-doc-generator.svg?branch=master)](https://travis-ci.org/dzekevis/api-doc-generator.svg?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9210e1267481426cb30e9335c07f856a)](https://www.codacy.com/app/dzekevis/api-doc-generator/dashboard)
[![Dependencies Status](https://david-dm.org/dzekevis/api-doc-generator.svg)](https://david-dm.org/dzekevis/api-doc-generator)
[![Download Status](https://img.shields.io/npm/dt/api-doc-generator.svg)](https://www.npmjs.com/package/api-doc-generator)
[![Version Status](https://badge.fury.io/js/api-doc-generator.svg)](https://www.npmjs.com/package/api-doc-generator)

A simple wrapper for generating REST API documentation based on <a href="https://github.com/tj/dox">Dox parser</a> and <a href="https://github.com/milligram/milligram">Milligram CSS framework</a>. Its goal is to make your JSDoc comments as human-friendly as possible. It provides a simple syntax and displays colorized documentation.

<a align="center" href="https://dzekevis.github.io/api-doc-generator/">
  <img width="100%" src="https://dzekevis.github.io/api-doc-generator/resources/demo.png" alt="A simple wrapper for generating REST API documentation">
</a>

Demo
----

Try out the <a href="https://dzekevis.github.io/api-doc-generator/demo">demo</a>!

Hello, Docs!
------------

```
Usage: api-doc-generator [options]

  Options:

    -h, --help                     output usage information
    -t, --title                    provide the document title
    -i, --input                    provide input file
    -o, --output                   provide output directory

  Examples:

    $ api-doc-generator --title My API Docs --input routes.js --output docs
```

Generator will create docs directory and put into the following files:
* index.html
* api-doc-generator.min.css
* api-doc-generator.min.js

routes.js:

```javascript
/**
 * Get a list of visible projects for authenticated user
 *
 * @section projects
 * @type get
 * @url /projects
 */
router.get('/projects', function () {});

/**
 * Create a project
 *
 * @section projects
 * @type put
 * @url /projects
 * @param {string} name
 * @param {string =} description
 */
router.put('/projects', function () {});

/**
 * Update a project
 *
 * @section projects
 * @type post
 * @url /projects/:id
 * @param {string} name
 * @param {string =} description
 */
router.post('/projects/:id', function () {});

/**
 * Delete a project
 *
 * @section projects
 * @type delete
 * @url /projects/:id
 */
router.delete('/projects/:id', function () {});
```

Installation
------------

Install this globally and you'll have access to the `api-doc-generator` command anywhere on your system.

```
npm install -g api-doc-generator
```

or install it locally to your `node_modules` folder

```bash
npm install --save api-doc-generator
```
