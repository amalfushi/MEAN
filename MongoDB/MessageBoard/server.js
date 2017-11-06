const express = require("express"),
    app = express(),
    bp = require("body-parser"),
    mongoose = require("mongoose"),
    path = require("path"),
    port = 8000;

app.use(express.static(path.join(__dirname, "/static")));
app.use(bp.urlencoded({extended:true}));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/MessageDashboard", {useMongoClient:true});

const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:2},
    text: {type: String, required: true, minlength: 5},
    _comments: [{type: Schema.Types.ObjectId, ref:"Comment"}]
}, {timestamps:true});

const CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref:"Message"},
    name: {type: String, required:true, minlength:2},
    text: {type: String, required:true, minlength:2}
}, {timestamps:true});

const Message = mongoose.model("Message", MessageSchema);
const Comment = mongoose.model("Comment", CommentSchema);

require("./server/config/routes.js")(app, Message, Comment);

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
});