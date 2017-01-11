/**
 * What is happening to the resolve.html:
 *
 * 1. Using Mustache templates, in the gulp-build, insert React and CSS
 * embedded in a preparatory HTML document. Leave the
 * {code_declaration} unfilled.
 * 2. In the api, fill that declaration with a `var code = "<myCode>"`
 * 3. Then, in the component, render that code as the base if it exists.
 *
 * Why do it in this roundabout way?
 * - Zoom Zooms. Don't make the API do stuff that the build script can do.
 * - DRY. This lets us use the same component in two places without having
 * to have much difficulty.
 */

const gulp = require('gulp');
const mustache = require('gulp-mustache');
const jetpack = require('fs-jetpack');
const path = require('../config.json').path;

gulp.task('resolver-html-compile', () => {
  var cssContent = jetpack.read(path.BUILD_API_CSS)
  var jsContent = jetpack.read(path.BUILD_API_JS_UI)

  gulp.src(path.API_HTML)
    .pipe(mustache({
      code_declaration: '{{&code_declaration}}', //Pass this on for the API
      css: cssContent,
      js: jsContent
    }))
    .pipe(gulp.dest(path.BUILD_API))
})
