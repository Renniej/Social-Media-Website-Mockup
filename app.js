var express = require('express');
var app = express();

var profileController = require('./controllers/profileController')




app.use('/assets', express.static('assets')); //When a html page calls assets url for an asset(ex. image) this is will route it to the assets folder
app.set('view engine', 'ejs');


//learn sessions

profileController(app);




app.get('*', function(req, res){ //404 Error

    res.send('404, PAGE NOT FOUND!');

});


app.listen(3000);