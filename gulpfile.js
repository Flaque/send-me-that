const gulp = require('gulp');
const path = require('./config.json').path;
const nodemon = require('gulp-nodemon');
const requireDir = require('require-dir');
requireDir('./gulp-tasks'); // Loads in entire gulp-tasks folder at once

/**
 * Note the api-js watches itself through watchify since it shouldn't have
 * any real html, sass or react components.
 */
const onLoad = ['reset-console', 'node-modules', 'api-js', 'editor-jsx',
  'sass', 'editor-html']

/**
 * Watches the editor
 */
gulp.task('default', onLoad, () => {
  return nodemon({
    script: 'server.js',
    watch: './src',
    tasks: ['reset-console', 'api-js', 'sass', 'editor-html', 'editor-jsx']
  })
})
