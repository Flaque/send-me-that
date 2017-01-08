const gulp = require('gulp');
const npm = require('gulp-npm-files');
const path = require('../config.json').path;

/**
 * Copys only npm dependencies and not dev dependencies 
 */
gulp.task('node-modules', () => {
  gulp.src(npm(), {base:'./'}).pipe(gulp.dest(path.BUILD));
})
