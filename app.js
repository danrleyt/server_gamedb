var express = require('express');
var multer = express('multer');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var https = require('https');
var fs = require('fs');

app.use(bodyParser.json());

//Connect to Mongoose
mongoose.connect('mongodb://localhost/gamedb');
var db = mongoose.connection;

var router = express.Router();
router.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log("Got Request"); //something is happening
    next();
});

router.get('/', function(req, res){
    res.send('API /api/game /api/genre');
});

router.post('/image', function(req, res){

});

var publisher = require('./routes/publisherroute')
var mode = require('./routes/moderoute');
var platform = require('./routes/platformroute');
var developer = require('./routes/developerroute');
var genre = require('./routes/genreroute');
var game = require('./routes/gameroute');
var user = require('./routes/userroute');

app.use('/api', router);
app.use('/api', genre);
app.use('/api', publisher);
app.use('/api', mode);
app.use('/api', platform);
app.use('/api', developer);
app.use('/api', game);
app.use('/api', user);

var httpServer = http.createServer(app);
httpServer.listen(3443);
console.log('Running on port 3443...');
