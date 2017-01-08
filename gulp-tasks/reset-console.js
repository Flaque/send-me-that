const gulp = require('gulp');
const rename = require('gulp-rename');
const path = require('../config.json').path;

gulp.task('reset-console', () => {
  gulp.src(path.RESET_CONSOLE_JS)
    .pipe(rename('reset-console.txt'))
    .pipe(gulp.dest(path.RESET_CONSOLE))
})
