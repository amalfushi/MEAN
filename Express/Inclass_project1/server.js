//kind of import statement
var express = require('express');
var app = express();
var path = require('path');
var bp = require('body-parser');
var port = 8000;


app.use(express.static(path.join(__dirname, '/static')));
app.use(bp.json());

//not used in angular///////////////////
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
///////////////////////////////////////

//routes--
app.get('/', function(request, responce){
    return responce.render('index')
})
app.get('/cats', function(request, responce){
    return responce.render('cats')
})
///////////

app.listen(port, function(){
    console.log(`We are listening on port ${port}`);
})