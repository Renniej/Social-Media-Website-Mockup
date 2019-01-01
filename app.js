var express = require('express');
var app = express();
const mongoose = require('mongoose');

var profileController = require('./controllers/profileController')
var AcctCreatorController = require('./controllers/AcctCreatorController');

//ES6 promises
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/Social-Media-Users'); //Server that stores site Users.


mongoose.connection.once('open', function(){

    console.log('Database connection Established :)')

}).on('error', function(err){

    console.log(`DB Connection Error : ${err}`);

});








app.use('/assets', express.static('assets')); //When a html page calls assets url for an asset(ex. image) this is will route it to the assets folder
app.set('view engine', 'ejs');


//learn sessions

profileController(app);
AcctCreatorController(app);



app.get('*', function(req, res){ //404 Error

    res.status(404);
    res.send('404, PAGE NOT FOUND!');

});


app.listen(3000);