var express = require('express')
var mongoose = require('mongoose');
var User = require('../models/userModel');


var router = express.Router();

router.get('/populate',(req,res) =>{

    


})

router.post('/create', (req, res)=>{

    user = new User(req.body);

    user.save((err, newUser) => {

        if (err){
            return handleError(err);
        }
        
        res.send("User was created sucessfully");

    })



})

router.get('/find/:id', function(req, res){ //Returns user's basic data

        User.findById(req.params.id, (err, user)=>{

            if (err){
                return handleError(err);
            }

            res.json(user);

        })

})




module.exports = router;
