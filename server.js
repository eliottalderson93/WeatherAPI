// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/public/dist/public' ));

app.use(express.static( __dirname + '/static/'));
// Setting our Views Folder Directory
//DATABASE/MONGOOSE
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/intro');

// Use native promises
mongoose.Promise = global.Promise;

var LocationSchema = new mongoose.Schema({
    city: String,
    humidity : Number,
    avgTemp : Number,
    highTemp : Number,
    lowTemp : Number,
    status : String
},{timestamps:true});

mongoose.model('Location',LocationSchema);

var Location = mongoose.model('Location');
// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})