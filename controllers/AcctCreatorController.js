var bodyParser = require('body-parser');
var User = require('../models/user');
var urlencodedParser  = bodyParser.urlencoded({ extended: false });





var getDate = function(){ //Grabbed from stackoverflow because... i didn't feel like coding it
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}


module.exports = function(app){



    app.get('/signup', function(req, res){

        res.render('signup')
        

    });



    app.post('/signup', urlencodedParser, function(req, res){

        //Vertify info here

      

            var today = new Date();

            var newUser = new User({

                Username : req.body.username,
                Pass : req.body.password,
                NickName : req.body.username,
                Desc : 'New User',
                Province : req.body.province,
                Country : req.body.country,
                DOB : req.body.date_of_birth,
                Joined : getDate(),
                Email : req.body.email, 
                Vertied : false //Did the user vertify their email/account
                

            })


            newUser.save(function(err,data){


                if (err){
                    
                    res.send('Looks like either your email or username is already in use ):')
                }
                else{

                    res.redirect('/profile/' + req.body.username);
                }

            })


   


    });

};