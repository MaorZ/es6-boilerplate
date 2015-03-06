var gulp = require('gulp'),
    transpile = require('gulp-babel'),
    config = require('../config');

gulp.task('transpile', function() {
  return gulp.src([config.src + '/*.js', config.src + '/**/*.js'])
      .pipe(transpile())
      .pipe(gulp.dest(config.lib));
});
