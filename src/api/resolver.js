const fs = require('fs')
const template = fs.readFileSync(__dirname + '/resolver.html.tmpl', "utf8")
const mustache = require('mustache')

module.exports = function resolve(req, res) {

  console.log("Resolver being hit!");

  // No body
  if (!req.body) {
    res.status(400).send("No request body; Did you try adding a content-type" + "application/x-www-form-urlencoded ?")
    return
  }

  var data = JSON.parse(req.body.params);

  // No data!
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params')
  }

  // Render the html, and embed the global code state
  var code_declaration = `var global_code="${data.code}"`
  var html = mustache.render(template, {
    code_declaration: code_declaration
  })

  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
}
