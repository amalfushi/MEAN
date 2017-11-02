var express = require('express');
var session = require('express-session');
var path = require('path');
var bp = require('body-parser');
var app = express();

var port = 8000;

app.use(express.static(path.join(__dirname, '/static')));
app.use(bp.json());
app.use(session({
    secret: 'codingdojorocks',
    resave: true,
    saveUninitialized: true,
    name: 'session'
}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    if (!req.session.counter){
        req.session.counter = 1;
    } else {
        req.session.counter++;
    }
    return res.render('index', {count: req.session.counter})
});

app.get('/addOne', function(req, res){
    return res.redirect('/')
})

app.get('/addTwo', function(req, res){
    req.session.counter++;
    return res.redirect('/')
})

app.get('/reset', function(req, res){
    req.session.counter =0;
    return res.redirect('/')
})

app.listen(port, function(){
    console.log(`We are listening on port ${port}`)
});