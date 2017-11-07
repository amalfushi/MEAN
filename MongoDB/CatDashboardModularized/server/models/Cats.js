const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength:2},
    age: {type:Number, required: true},
    color: {type: String, required:true, minlength:3},
    breed: {type: String, required:true, minlength:4}
});

const Cats = mongoose.model("Cats", CatSchema);