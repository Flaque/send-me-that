const sendFilledHTML = require('./util/sendFilledHTML.js');

/**
 * Editor route
 */
module.exports = function(req, res) {
  sendFilledHTML(res, {
    isEditor: true
  })
}
