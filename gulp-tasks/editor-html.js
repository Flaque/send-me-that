const gulp = require('gulp');
const path = require('../config.json').path;

/**
 * Editor HTML
 */
gulp.task('editor-html', () => {
  gulp.src(path.EDITOR_HTML)
    .pipe(gulp.dest(path.BUILD_EDITOR));
})
