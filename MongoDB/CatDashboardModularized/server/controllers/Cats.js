const mongoose = require("mongoose"),
    Cats = mongoose.model("Cats");

module.exports = {
    showAll: (req, res)=> {
        Cats.find({}, (err, cats)=>{
            if (err){
                console.log(err);
            } else {
                return res.render("index", {cats: cats});
            }
        });
    },

    showOne: (req, res)=> {
        Cats.find({_id:req.params.id}, (err, cat)=>{
            if(err){
                console.log(err)
            } else {
                return res.render("cat", {cat: cat[0]});
            }
        });
    },

    editForm: (req, res)=> {
        Cats.find({_id:req.params.id}, (err, cat)=>{
            if(err){
                console.log(err)
            } else {
                return res.render("edit", {cat: cat[0]});
            }
        });
    },

    edit: (req, res)=> {
        Cats.update({_id:req.params.id}, req.body, (err, results)=>{
            if(err){
                console.log(err)
            } else {
                return res.redirect("/cats/"+req.params.id);
            }
        });
    },

    delete: (req, res)=> {
        Cats.remove({_id:req.params.id}, (err, result)=>{
            if (err){
                console.log(error);
            } else {
                return res.redirect("/");
            }
        });
    },

    create: (req, res)=> {
        Cats.create(req.body, (err)=>{
            if (err){
                console.log(err);
            } else {
                return res.redirect('/');
            }
        });
    },
}