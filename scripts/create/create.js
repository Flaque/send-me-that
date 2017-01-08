/**
 * create.js - A node script for creating React, Sass and Jest components.
 * By Evan Conrad
 *
 *
 * # Usage
 * Running `$ yarn create myComponentName` will create
 * a folder `web/static/js/components/myComponentName`
 * with the file structure:
 *
 * myComponentName
 *  - myComponentName.jsx     // React JSX file
 *  - myComponentName.scss    // Sass file
 *  - __tests__
 *    - myComponentName-test.js // Jest test
 *
 */

/**
 * Load in dependencies
 */
let jetpack = require('fs-jetpack'); // File system library
let mustache = require('mustache');  // Templating
require('./util.js');

/**
 * Config
 */
const CONFIG = require('./config.json');

/**
 * Error messages
 */
const PROPER_USAGE = `'$ yarn create myComponentName'`
const NO_PARAMETERS = `ERROR: You have no parameters.
Proper usage of this script is: ${PROPER_USAGE} \n`
const COMPONENT_EXISTS = `ERROR: A component with this name already exists!
We're not going to overwrite this component. \n`

/**
 * Gets the command line parameters
 */
function getParameters() {
  if (process.argv.length <= 2) return false; // Fail
  return {name: process.argv[2]}; // Name
}

/**
 * Gets the react boilerplate
 */
function getReactBoilerplate(name) {
  let template = jetpack.cwd(__dirname).read('./react-boilerplate.mustache')
  return mustache.render(template, {
    capital_name : name.capitalizeFirstLetter(),
    lower_name : name.lowercaseFirstLetter()
  })
}

/**
 * Gets the sass boierplate
 */
function getSassBoilerplate(name) {
  return "" // Nothing yet?
}

/**
 * Gets the test boilerplate
 */
function getTestBoilerplate(name) {
  let template = jetpack.cwd(__dirname).read('./jest-boilerplate.mustache')
  return mustache.render(template, {
    capital_name : name.capitalizeFirstLetter(),
    lower_name : name.lowercaseFirstLetter()
  })
}

/**
 * Creates the files in the component library
 */
function createFiles(parameters) {
  let name = parameters.name;

  // Check that we're not overwriting an existing component
  if (jetpack.cwd(CONFIG.path).exists(name)) throw COMPONENT_EXISTS;

  // Create the component structure
  jetpack.cwd(CONFIG.path)
    .dir(name.lowercaseFirstLetter())
      .file(`${name.capitalizeFirstLetter()}.jsx`,
        {content: getReactBoilerplate(name)})
      .file(`${name.capitalizeFirstLetter()}.scss`, 
        {content: getSassBoilerplate(name)})
      .dir('__test__')
        .file(`${name.capitalizeFirstLetter()}.spec.js`,
          {content: getTestBoilerplate(name)})
}

/**
 * Main kick off of the script
 */
function main() {
  const parameters = getParameters()

  // Check that the user has the proper parameters
  if (!parameters) throw NO_PARAMETERS;

  // If all is good, create the files.
  createFiles(parameters)
}

main(); // Runs the script!
