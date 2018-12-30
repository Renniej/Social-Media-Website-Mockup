var Users  = [

    { id: 0, //User's ID number

            info : {
        Username : "Renniej",
        Pass : "Test123",
        Nick_Name : "Tai Rennie",
        Desc : "HELLO! My name is rennie and i am attempting to learn a GIAGANTIC number of things on this platform. If you need me just send a message. k thanks.",
        Province : "Ontario",
        Country : "Canada",
        DOB : "Feb 11 1999",
        Joined : "October 2015",
        Email : "testtest2@gmail.com",
        Vertifed : true
        
        }
    }
];






var FindUser = function(elem,method){ //method = find user by which method (Username or ID)

    var FoundUser = null;
   

    if (method ===  'Username'){ //If method specified is username then check the USERS database for matching username(elem)

            for (i = 0; i < Users.length; ++i){

                if (Users[i].info.Username == elem){

                    FoundUser = Users[i];
                    break;
                }

            }


    }

    else{

        for (i = 0; i < Users.length; ++i){//If method specified is username then check the USERS database for matching ID(elem)

            if (Users[i].id == elem){

                FoundUser = Users[i];
                break;
            }

        }

    }
    
    return FoundUser;


};


module.exports = function(app){

    app.get('/profile/:id', function(req, res){

        
        var FoundUser = FindUser(req.params.id,'Username');

        console.log(FoundUser) 

       if (FoundUser !== null){
             res.render('Profile', {User: FoundUser.info});
        }
        else{
            res.send('USER DOES NOT EXIST... SORRY!');
        }
    
    
        
    });

}






