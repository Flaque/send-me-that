/**
 * Reroutes the console to the DOM console.
 */

import copy from 'shallow-copy';

const consoleItemClassName = 'console-item';

/**
 * Logs to OUR in-DOM console.
 * @param msg
 * @param withClass - the class to apply to the console item
 *                    (log, error, warn, ...)
 */
function log(msg, withClass) {
  var consoleNode = document.getElementById('console');
  if (!consoleNode) throw "Cannot find the DOM console!"
  var div = document.createElement('div');
  div.className = consoleItemClassName + ' ' + withClass;
  div.innerHTML = msg;
  consoleNode.appendChild(div);
}

/**
 * Reroutes the console to our DOM displayed console messages
 */
function hijack() {
  var consoleItemClassName = 'console-item'

  // Implemented methods
  window.console.log = function(msg) { log(msg, 'log') }
  window.console.error = function(msg) { log(msg, 'error') }
  window.console.warn = function(msg) { log(msg, 'warn') }
}

/**
 * Sets console back to it's old self. (No side effects)
 */
function release(consoleClone) {
  window.console = consoleClone
}

/**
 * Hijacks any console.log, error or warns
 * inside the script and funnels them to our DOM.
 */
function reroute(script) {
  let clone = copy(window.console); // Copy is very important here.
  hijack(); // Take control of the console
    script(); // Run custom script
  release(clone); // Release control of console
}

export {reroute}
