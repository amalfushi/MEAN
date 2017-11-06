module.exports = function(app, Cats){
    //get all cats
    app.get("/", (req, res)=>{
        Cats.find({}, (err, Cats)=>{
            if (err){
                console.log(err);
            }
            // console.log(Cats)
            return res.render("index", {cats: Cats})
        });
    });

    //get one
    app.get("/cats/:id", (req, res)=>{
        // console.log(req.params.id)
        Cats.find({_id:req.params.id}, (err, cat)=>{
            if(err){
                console.log(err)
            }
            // console.log(cat)
            return res.render("cat.ejs", {cat: cat[0]})
        });
    });

    //get one cat
    app.get("/cats/:id/edit", (req, res)=>{
        // console.log(req.params.id)
        Cats.find({_id:req.params.id}, (err, cat)=>{
            if(err){
                console.log(err)
            }
            // console.log(cat)
            return res.render("edit.ejs", {cat: cat[0]})
        });
    });

    //edit cat 
    app.post("/cats/:id/edit", (req, res)=>{
        // console.log(req.params.id)
        Cats.update({_id:req.params.id}, req.body, (err, results)=>{
            if(err){
                console.log(err)
            }
            // console.log(cat)
            return res.redirect("/cats/"+req.params.id)
        });
    });

    //delete cat
    app.get("/cats/:id/delete", (req, res)=>{
        Cats.remove({_id:req.params.id}, (err, result)=>{
            if (err){
                console.log(error);
            }
            return res.redirect("/");
        });
    });

    //create cat
    app.post("/cats", (req, res)=>{
        // console.log(req.body)
        Cats.create(req.body, (err)=>{
            if (err){
                console.log(err);
            }
            return res.redirect('/');
        });
    });

    //create cat form
    app.get("/cats/new", (req, res)=>{
        return res.render("new")
    });
};