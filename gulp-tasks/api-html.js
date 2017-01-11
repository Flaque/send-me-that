const gulp = require('gulp');
const path = require('../config.json').path;

gulp.task('api-html', () => {

  gulp.src(path.API_HTML)
    .pipe(gulp.dest(path.BUILD_API))
})
