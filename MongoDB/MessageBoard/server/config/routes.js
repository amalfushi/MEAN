module.exports = (app, Message, Comment) =>{
    app.get("/", (req, res)=>{
        Message.find({}).populate('_comments').sort("-updatedAt").exec((err, messages)=>{
            if(err){
                console.log(err);
            }
            return res.render("index", {messages: messages});
        });
    });

    //create post
    app.post("/messages/new", (req, res)=>{
        Message.create(req.body, (err)=>{
            if (err){
                console.log(err);
            }
            return res.redirect("/");
        });
    });

    app.post("/messages/:id/newComment", (req, res) =>{
        Message.findOne({_id: req.params.id}, function(err, message){
            let comment = new Comment(req.body);
            comment._message = message;
            Message.update({_id:message._id}, {$push:{_comments:comment}}, (err)=>{});
            comment.save((err)=>{
                if(err) {
                    console.log(err);
                }
                return res.redirect("/")
            });
        });
    });
};