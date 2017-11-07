const express = require("express"),
    app = express(),
    bp = require("body-parser"),
    path = require("path"),
    port = 8000;

app.use(express.static(path.join(__dirname, "./client/static")));
app.use(bp.urlencoded({extended:true}));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

require("./server/config/mongoose.js");

const routes = require("./server/config/routes.js")(app);

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
});