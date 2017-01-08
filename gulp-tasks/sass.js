const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const path = require('../config.json').path;

/**
 * Sass
 */
gulp.task('sass', () => {
  return gulp.src(path.EDITOR_SCSS)
    .pipe(sass.sync().on('error', sass.logError)) // Compile
    .pipe(concat(path.BUILD_EDITOR_CSS)) // Combine CSS
    .pipe(gulp.dest(path.BUILD_EDITOR)) // Copy over
})
