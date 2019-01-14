var Users = require('../models/user');



module.exports = function(app){

    app.get('/profile/:id', function(req, res){

        
        Users.collection.findOne({Username : req.params.id}).then(function(result){

            if (result.Username === req.params.id){

                res.status(200);
    
                //console.log(result);
    
                res.render('Profile', {User: result});
            }
      
            

        }).catch(function(err){


            res.status(404);
            res.send('USER DOES NOT EXIST... SORRY!');


        });



        
    
        
    });

    

}






