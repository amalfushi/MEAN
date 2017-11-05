var express = require("express");
var app = express();
var bp = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

var port = 8000;

app.use(express.static(path.join(__dirname, "/static")));
app.use(bp.urlencoded({extended:true}));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/QuotingDojo', {useMongoClient:true});

//Schema --------should be on it"s own .js
var QuoteSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength:2},
    quote: {type:String, requred: true, minlength:5}
}, {timestamps:true});
var Quotes = mongoose.model("quotes", QuoteSchema);

//ROUTES---------should be in it"s own .js
app.get("/", function(req, res){
    console.log(req.body);
    return res.render("index");
});

// app.post("/process", function(req, res){
//     // req.body.clear()mo
//     // console.log(req.body)
//     Quote.create(req.body, function(err){
//         if (err){
//             console.log("Couldn't add quote")
//         } else{
//             return res.redirect("/quotes")
//         }
       
//     });
// });

app.get("/quotes", function(req, res){
    Quotes.find({}, function(err, quotes){
        if (err){
            console.log(err);
        }
        // console.log(quotes)
        return res.render('quotes', {quotes: quotes});
    });
});

app.post('/quotes', function(req, res){
    console.log(req.body)
    Quotes.create(req.body, function(err){
        if (err) {
            console.log(err)
        };
        return res.redirect('/quotes');
    })
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});