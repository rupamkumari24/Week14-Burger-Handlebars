var bodyParser = require('body-parser');


var methodOverride = require('method-override');
var express = require('express');

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgersController.js');

app.use('/', routes);

var port = 3000;
app.listen(port);