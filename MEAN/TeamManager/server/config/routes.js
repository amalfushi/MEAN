const Players = require("./../controllers/players"),
    path = require("path");

module.exports = function(app){
    app.get("/players", Players.all);
    app.post("/players", Players.create);
    app.delete("/players/:id", Players.delete)
    app.put("/players", Players.update)
    app.all("*", (req, res, next)=> {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}