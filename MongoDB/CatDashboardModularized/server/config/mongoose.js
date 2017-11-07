const mongoose = require("mongoose"),
    fs = require("fs"),
    path = require("path");

mongoose.connect("mongodb://localhost/catDashboard");

const mp = path.join(__dirname, "./../models");

fs.readdirSync(mp).forEach((file)=> {
    if(file.indexOf(".js") >= 0){
        require(mp + "/" + file);
    }
});