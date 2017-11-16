const express = require("express");
const bp = require("body-parser");
const path = require("path");
const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, "/public/dist")));
app.use(bp.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, ()=> console.log(`\nListening on port ${port}...\n`))