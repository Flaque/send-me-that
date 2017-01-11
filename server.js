const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const resolve = require('./build/api/resolver'); //converting from es6
const mustache = require('mustache');
const fs = require('fs')

function sendFilledHTML(res, data) {
  const template = fs.readFileSync(__dirname + '/build/editor/editor.html', "utf8")
  res.send(mustache.render(template, data))
}

// Serve assets in /build.
app.use(express.static(__dirname + '/build'));

// So we can POST.
app.use(bodyParser.urlencoded({
  extended: true
}));

// Since Mixmax calls this API directly from the client-side, it must be whitelisted.
var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

// The editor interface.
app.get('/editor', function(req, res) {
  sendFilledHTML(res, {
    isEditor: true
  })
});

/**
 * Runs from the resolver.html.tmpl submit button.
 */
app.get('/scriptrunner', function(req, res) {

  sendFilledHTML(res, {
    isEditor: false,
    inScript: {
      code: "var set_code = '" + req.query.code + "'"
    }
  })
})

// The in-email representation.
app.post('/api/resolver', cors(corsOptions), resolve);

app.listen(process.env.PORT || 4000);
