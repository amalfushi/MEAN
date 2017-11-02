var express = require('express');
var session = require('express-session');
var path = require('path');
var bp = require('body-parser');

var app = express();
var port = 8000;

app.use(express.static(path.join(__dirname, '/static')));
app.use(bp.json());

const sessSettings ={
    name: 'session',
    secret: 'ubercryptography',
    resave: true,
    saveUninitialized: true
}
app.use(session(sessSettings));
app.use(bp.urlencoded({extended: true}))

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//routes
app.get('/', function(req, res){
    return res.render('index')
});

app.post('/process', function(req, res){
    console.log("Pos Data\n\n", req.body)

    results ={
        name: req.body['name'],
        location: req.body['location'],
        language: req.body['fav_language'],
        comment: req.body['comment'],
    }
    return res.render('results', results)
});

app.listen(port, function(){
    console.log(`Listening on port ${port}`)
});