const gulp = require('gulp');
const path = require('./config.json').path;
const nodemon = require('gulp-nodemon');
const requireDir = require('require-dir');
requireDir('./gulp-tasks'); // Loads in entire gulp-tasks folder at once

/**
 * Note the api-js watches itself through watchify since it shouldn't have
 * any real html, sass or react components.
 */
let onLoad = ['api-html', 'node-modules', 'api-js', 'bundle',
  'sass', 'editor-html']

/**
 * Watches the editor
 */
gulp.task('default', onLoad, () => {
  return nodemon({
    script: 'server.js',
    watch: './src',
    tasks: ['api-html','api-js', 'sass', 'editor-html', 'bundle']
  })
})


onLoad.push('apply-prod-environment') //Add prod environment
gulp.task('prod-build-test', onLoad, () => {
  return nodemon({
    script: 'server.js',
    watch: './src',
    tasks: ['api-html', 'api-js', 'sass', 'editor-html', 'bundle']
  })
})
