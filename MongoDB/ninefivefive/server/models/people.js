var mongoose = require('mongoose');

var People_Schema = mongoose.Schema({
    name: String
});

mongoose.model("People", People_Schema)