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

  var html = '<p>hi there' + data.code + ' </p>'
  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
}
