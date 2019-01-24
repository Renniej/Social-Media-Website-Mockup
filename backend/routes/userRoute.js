var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/userModel');
var request = require('request-promise');

var router = express.Router();

router.get('/populate',(req,res) =>{

    request.get('https://reqres.in/api/users?per_page=20')
    
        .then(function(body){

            var data = JSON.parse(body);
            var newUserArray  = [];
            for (x in data.data){

                var newUser = new User({

                    Username : x.first_name + x.last_name,
                    Pass : "Testing123",
                    NickName :  x.first_name + " " + x.last_name,
                    Desc: 'Et altera admodum pro. Ne modo veri discere sit, ei nam duis debet. Eum nisl nominavi eloquentiam eu, est ne modus molestiae, ut possim nonumes theophrastus per. Te eos nisl albucius. Sed eu labore nostrud. Pri an movet disputando, at nam viris alienum. Eu cetero oblique eam, vix et fabellas verterem pericula, usu saperet civibus ei. An eius reque sea, id nam quem erat, mei ut possit nusquam. Laudem perfecto mea ne. Et eligendi antiopam mea, quo ei porro animal denique. Vis nulla melius consequuntur cu, postulant moderatius et sit, cu duo harum aeterno. Ex ius unum audire quaeque, no his quem theophrastus.',
                    DOB : new Date(),
                    Joined : new Date(),
                    Email :  x.first_name + x.last_name + '@testing.com',
                    Vertified : true

                })

                newUser.save(function(err, user){

                        if (err){
                            return err;
                        }

                        newUserArray.push(user);

                })
            }

            res.json(newUserArray)

            
        })
        
        .catch(function(err){

            res.send(err);
        }); 


})

router.post('/create', (req, res)=>{

    newUser = new User(req.body);

    newUser.save((err, user) => {

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
