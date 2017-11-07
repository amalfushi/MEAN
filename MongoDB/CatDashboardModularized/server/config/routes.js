const Cats = require("./../controllers/Cats.js");

module.exports = (app)=> {
    //get all cats
    app.get("/", (req, res)=>{
        Cats.showAll(req, res);
    });

    //get one
    app.get("/cats/:id", (req, res)=>{
        // console.log(req.params.id)
        Cats.showOne(req, res);
    });

    //edit one cat
    app.get("/cats/:id/edit", (req, res)=>{
        Cats.editForm(req, res);
    });

    //edit cat 
    app.post("/cats/:id/edit", (req, res)=>{
        // console.log(req.params.id)
        Cats.edit(req, res);
    });

    //delete cat
    app.get("/cats/:id/delete", (req, res)=>{
        Cats.delete(req, res);
    });

    //create cat form
    app.get("/new", (req, res)=>{
        // Cats.createForm(req, res);
        return res.render("new");
    });

    //create cat
    app.post("/cats", (req, res)=>{
        Cats.create(req, res);
    });
};