const Notes = require("./../controllers/notes.js");

module.exports = function(app){
    
    app.post("/new", function(req, res){
        Notes.create(req,res);
    });

    app.get("/all", (req, res)=>{
        Notes.index(req,res);
    });
}