const mongoose = require("mongoose"),
    Note = mongoose.model("Note");

module.exports =  {
    index: (req, res)=>{
        Note.find({}).sort("-createdAt").exec((err, notes)=>{
            if(err){
                console.log(err)
            } else {
                return res.json(notes);
            }
        });
    },
    create: (req, res)=>{
        Note.create(req.body, (err, note)=>{
            if (err){
                console.log("MongoDB couldn't create note");
            } else {
                return res.json(note);
            }
        });
    }
}