var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var resolve = require('./build/api/resolver'); //converting from es6

// Serve assets in /public.
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
  res.sendFile(__dirname + '/editor/index.html');
});

// The in-email representation.
app.post('/api/resolver', cors(corsOptions), resolve);

app.listen(process.env.PORT || 4000);
