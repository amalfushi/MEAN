var mongoose = require('mongoose');
    People = mongoose.model("People");

module.exports = {
    all:function(req, res){
        People.find({}, function(err, peoples){
            return res.json(peoples)
        })
    },
    create:function(req, res){
        People.create({name: req.params.name}, function(err){
            return res.redirect('/')
        })
    },
    destroy:function(req, res){
        People.remove({name: req.params.name}, function(err){
            return res.redirect('/')
        })
    },
    getOne:function(req, res){
        People.findOne({name: req.params.name}, function(err, person){
            return res.json(person)
        })
    },
}   