const express = require("express"),
    app = express(),
    bp = require("body-parser"),
    path = require("path"),
    mongoose = require("mongoose"),
    port = 8000;

app.use(express.static(path.join(__dirname, '/static')));
app.use(bp.urlencoded({extended:true}));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/catDashboard", {useMongoClient:true});

//Schema ----- should be elswhere
const CatSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength:2},
    age: {type:Number, required: true},
    color: {type: String, required:true, minlength:3},
    breed: {type: String, required:true, minlength:4}
});
const cats = mongoose.model("cats", CatSchema);

require('./server/config/routes.js')(app, cats);

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
});