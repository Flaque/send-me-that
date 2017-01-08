(function() {

  var consoleItemClassName = 'console-item'

  /**
   * Logs to OUR in-DOM console.
   * @param msg
   * @param withClass - the class to apply to the console item
   *                    (log, error, warn, ...)
   */
  function log(msg, withClass) {
    var consoleNode = document.getElementByID('console');
    var div = document.createElement('div');
    div.className = consoleItemClassName + ' ' + withClass;
    consoleNode.appendChild(div);
  }

  // Implemented methods
  console.log = function(msg) { log(msg, 'log') }
  console.error = function(msg) { log(msg, 'error') }
  console.warn = function(msg) { log(msg, 'warn') }
  console.debug = function(msg) { log(msg, 'log') }
  console.exception = function(msg) { log(msg, 'error') }
  console.info = function(msg) { log(msg, 'info') }
})
