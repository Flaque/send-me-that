const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const resolve = require('./build/api/resolver'); //converting from es6
const mustache = require('mustache');
const fs = require('fs')
const editor = require('./build/api/editor');
const scriptrunner = require('./build/api/scriptrunner');

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
app.get('/editor', editor);

/**
 * Runs from the resolver.html.tmpl submit button.
 */
app.get('/scriptrunner', scriptrunner)

// The in-email representation.
app.post('/api/resolver', cors(corsOptions), resolve);

app.listen(process.env.PORT || 4000);
