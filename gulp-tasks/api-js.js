const gulp = require('gulp');
const babel = require('gulp-babel');
const path = require('../config.json').path;

/**
 * Editor HTML
 */
gulp.task('api-js', () => {
  gulp.src(path.BUILD_API_JS)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(path.BUILD_API));
})
