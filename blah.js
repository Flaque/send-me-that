var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var babelify = require('babelify').configure({"presets": ["es2015", "react"]});
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gutil = require('gulp-util');

var path = {
  HTML: 'src/index.html',
  ENTRY: './src/index.js',
  JSX: './src/**/*.jsx',
  OUT: 'build.js',
  SCSS: './src/**/*.scss',
  CSS_OUT: 'build.css',
  MINIFIED_OUT: 'build.min.js',
  DEST: './build',
  DEST_HTML: './build/index.html',
};

var bundler = watchify(browserify({entries: path.ENTRY, extension: ['jsx']})
  .transform(babelify))
bundler.on('update', bundle)

/**
 * Bundles
 */
function bundle() {
  gutil.log('Compiling JS...');

  return bundler.bundle()
    .on('error', (err) => {
      gutil.log(err.message)
      browserSync.notify("Browserify Error!")
    })
    .pipe(source(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST))
    .pipe(browserSync.stream({once: true}))
}

gulp.task('bundle', () => {
  bundle()
})

/**
 * Sass
 */
gulp.task('sass', () => {
  return gulp.src(path.SCSS)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat(path.CSS_OUT))
    .pipe(gulp.dest(path.DEST))
    .pipe(browserSync.stream())
})

gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest('./build/fonts'));
});

/**
 * Copys the HTML over to the build
 */
gulp.task('copy', () => {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
})

/**
 * Launches server, watches files.
 */
gulp.task('serve', [ 'bundle', 'sass', 'copy'], () => {

  browserSync.init({
    server: path.DEST
  })

  gulp.watch(path.DEST_HTML).on('change', browserSync.reload)
  gulp.watch(path.SCSS, ['sass'])
  gulp.watch(path.JSX, ['bundle'])
})

// Just running the watch task
gulp.task('default', ['serve']);
