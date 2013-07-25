var fs = require('fs'); 
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var file = fs.readFileSync('index.html','utf8');
  alert("File = " + file);
  response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
