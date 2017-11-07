var mongoose = require('mongoose');
var people = require('./../controllers/people.js')

module.exports = function(app){
    app.get('/', function(req, res){
        people.all(req, res);
    });
    app.get('/new/:name/', function(req, res){
        people.create(req, res);
    });
    app.get('/remove/:name/', function(req, res){
        people.destroy(req, res);
    });
    app.get('/:name', function(req, res){
        people.getOne(req, res);
    });
}