
var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;



var controller = require('./controller.js');

app.route('/convert/:number')
  .get(controller.getnormal);


app.route('/convertOrdinal/:number')
  .get(controller.getordinal);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
