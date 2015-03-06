#ES6 Boilerplate

A starting place for ES6 projects.

This repo contains a starting structure for writing well testing ECMAScript 6 applications.

##Tools

This repo comes packaged with [gulp](http://gulpjs.com/) tasks for transforming ES6 to ES5. The following tools are used:

* [browserify](http://browserify.org/) (with the babelify transformer)
* [babel](https://babeljs.io/) - for transforming ES6 code to ES5 so you can use it today!
* [jest](https://facebook.github.io/jest/) - for running unit tests

##Structure

The root level of the project contins the following directories and files:

* `src/` - where your ES6 source code goes
* `lib/` - where your transpiled ES6 ends up
* `gulp/` - where all the gulp tasks are kept
* `bootstrap.js` - this gets included into the test environment via jest
* `gulpfile.js` - the gulp entry point (shouldn't have to do anything with is)
* `index.js` -  your module entry point
* `mylibrary.js` - this is used to export your module to the browser (if you want). This should be renamed.
* `package.json` - lists dev dependencies for the build process

After a build, the concatenated and minified browser export will be placed in the `dist` directory by default.

##Configuration

You can tweak gulp variables, like the project name (i.e mylibrary.js), the source, lib, and dist directories, as well
as what paths to watch when running the gulp dev task.

##Building

Before building or testing, install all the deps:

```
npm i
```

There is an npm script you can run to build:

```
npm run build
```

##Testing

There is an npm script for that too!:

```
npm test
```

There is a sample class and test included that you can run after cloning and doing `npm i`

##Suggestions? Improvements?

Please open issues or pull requests if you have bugs/improvements.