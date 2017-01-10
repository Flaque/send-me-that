const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify').configure({"presets": ["es2015", "react"]});
const path = require('../config.json').path;
const fs = require('fs');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

var bundler = watchify(browserify({entries: path.EDITOR_ENTRY_JS,
    extension: ['jsx']}).transform(babelify).transform('brfs'))

/**
 * Bundle
 */
function bundle() {
  gutil.log('Compiling JS/X in Editor...');

  return bundler.bundle()
    .on('error', (err) => {
      gutil.log(err.message)
    })
    .pipe(source(path.BUILD_EDITOR_JS))
    .pipe(buffer()) // Convert from stream to buffered stream obj
    .pipe(uglify())
    .pipe(gulp.dest(path.BUILD_EDITOR))
}

bundler.on('update', bundle)
gulp.task('editor-jsx', () => {
  bundle()
})
