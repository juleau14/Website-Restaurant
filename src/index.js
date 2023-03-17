var express = require('express');
var app = express();
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(express.static('static/'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', routes);
app.post('*', routes);

app.listen(8000, () => {
    console.log("Listening on port 8000 !");
});