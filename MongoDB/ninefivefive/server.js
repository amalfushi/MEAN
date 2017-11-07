var express = require('express');
    app = express();
    bp = require('body-parser');
    path = require('path');
    session = require('express-session');
    port = 8000;

app.use(express.static(path.join(__dirname, '/client/static')));
app.use(bp.json());

require("./server/config/mongoose.js");
var routes = require("./server/config/routes.js")(app);

app.listen(port, function(){
    console.log(`We are listening to port ${port}`);
});