const fs = require('fs')
const template = fs.readFileSync(__dirname + '/resolver.html.tmpl', "utf8")
const mustache = require('mustache')

module.exports = function resolve(req, res) {

  // No body
  if (!req.body) {
    res.status(400).send("No request body; Did you try adding a content-type" + "application/x-www-form-urlencoded ?")
    return
  }

  var data = JSON.parse(req.body.params);
  var runURL = req.protocol + '://' + req.get('host') + '/scriptrunner'

  // No data!
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params')
  }

  // Render the html, and embed the global code state
  let inputCode = data.code.split('\n')
  inputCode = inputCode.join('\\n') //Explicitly add new line characters to avoid url issues

  var html = mustache.render(template, {
    code: data.code,
    inputCode: inputCode,
    runURL: runURL
  })

  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
}
