var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    config = require('../config'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('browserify', ['babel'], function() {
  return browserify('./' + config.main)
      .transform(babelify)
      .bundle()
      .pipe(source(config.main))
      .pipe(buffer())
      .pipe(gulp.dest(config.dist))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(config.dist));
});
