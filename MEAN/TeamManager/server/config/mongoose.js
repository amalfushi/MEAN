const mongoose = require("mongoose"),
    fs = require("fs"),
    path = require("path");

mongoose.connect("mongodb://localhost/TeamManager", { useMongoClient:true});

const mp = path.join(__dirname, "./../models");

fs.readdirSync(mp).forEach((file)=>{
    if(file.includes(".js")){
        console.log(`\nLoading ${file}...\n`)
        require(mp + "/" +file);
    }
});