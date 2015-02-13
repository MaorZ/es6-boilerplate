'use strict';

var lib = 'lib',
    src = 'src';

module.exports = {
  src: src,
  lib: lib,
  main: 'mylibrary.js',
  dist: 'dist',
  watch: {
    paths: ['js'].reduce(function(paths, ext) {
      return paths.concat([src + '/**/*.' + ext, src + '/*.' + ext]);
    }, [])
  }
};
