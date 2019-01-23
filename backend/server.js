var express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

var userRoute = require('./routes/userRoute');

var app = express()


mongoose.connect('mongodb://test:testing1@ds211275.mlab.com:11275/social-media-mockup', {useNewUrlParser: true});




app.use(bodyParser.json());

app.use('/api/user', userRoute);


app.get('/', function(req, res){

    res.send("HELLO ALL");
})

app.get('*', (req, res) =>{

        res.send("PAGE NOT FOUND BUD :(")

})

app.listen(4000, function(){

    console.log("Listening on port 4000");
})