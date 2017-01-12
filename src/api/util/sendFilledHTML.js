const fs = require('fs')
const mustache = require('mustache')

/**
 * Sends the editor template back with filled data from the response.
 */
module.exports = function(res, data) {
  const template = fs.readFileSync(__dirname + '/../../editor/editor.html', "utf8")
  res.send(mustache.render(template, data))
}
