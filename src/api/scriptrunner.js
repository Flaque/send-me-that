const sendFilledHTML = require('./util/sendFilledHTML.js');

/**
 * Scriptrunner route
 */
module.exports = function(req, res) {

  sendFilledHTML(res, {
    isEditor: false,
    inScript: {
      code: "var set_code = '" + req.query.code + "'"
    }
  })
}
