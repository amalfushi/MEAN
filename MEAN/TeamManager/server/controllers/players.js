const mongoose = require("mongoose"),
    Player = mongoose.model("Player");

module.exports = {
    create: function(req, res){
        console.log(req.body)
        Player.create(req.body, (err, player)=> {
            if(err){
                return res.json(err);
            }
            return res.json(player);
        });
    },
    all: function(req, res){
        Player.find({}).sort("position").exec((err, players)=>{
            if(err){
                return res.json(err);
            }
            return res.json(players);
        })
    },
    delete: function(req, res){
        Player.remove({_id: req.params.id}, (err, success)=>{
            if(err){
                return res.json(err);
            }
            return res.json(success);
        });
    },
    update: function(req, res){
        Player.update(req (err, player)=>{
            if(err){
                return res.json(err);
            }
            return res.json(player);
        })
    }

}