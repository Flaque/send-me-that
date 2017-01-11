const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const path = require('../config.json').path;
const importCSS = require('gulp-import-css');

/**
 * Sass
 */
gulp.task('sass', () => {
  return gulp.src(path.EDITOR_SCSS)
    .pipe(sass({includePaths: ['../node_modules']}).on('error', sass.logError)) // Compile
    .pipe(concat(path.BUILD_EDITOR_CSS)) // Combine CSS
    .pipe(importCSS())
    .pipe(gulp.dest(path.BUILD_EDITOR)) // Copy over
    .pipe(gulp.dest(path.BUILD_API))
})
