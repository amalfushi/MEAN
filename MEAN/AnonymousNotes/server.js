const express = require("express"),
    app = express(),
    bp = require("body-parser"),
    path = require("path"),
    port = 8000;

app.use(express.static(path.join(__dirname, "./AnonymousNotesApp/dist")));
app.use(bp.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, function(){
    console.log("Listening on port " + port);
});