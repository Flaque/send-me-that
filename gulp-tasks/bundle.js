const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify').configure({"presets": ["es2015", "react"]});
const fs = require('fs');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const path = require('../config.json').path;

var bundler = watchify(browserify({entries: path.EDITOR_ENTRY_JS,
    extension: ['jsx']}).transform(babelify).transform('brfs'))

/**
 * Bundle
 */
function bundle(bundler) {
  gutil.log('Compiling JS/X in Editor...');

  return bundler.bundle()
    .on('error', (err) => {
      gutil.log(err.message)
    })
    .pipe(source(path.BUILD_EDITOR_JS))
    .pipe(buffer()) // Convert from stream to buffered stream obj
    .pipe(uglify())
    .pipe(gulp.dest(path.BUILD_EDITOR))
    .pipe(gulp.dest(path.BUILD_API))
}

bundler.on('update', () => { bundle(bundler )})
gulp.task('bundle', () => {
  bundle(bundler)
})
