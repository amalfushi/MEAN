const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
    name: {type: String, required:true, minlength:3},
    position: {type: String, required:true, minlength:3},
    status: {
        game1: String,
        game2: String,
        game3: String,
    }
});

mongoose.model("Player", PlayerSchema);