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

        },


        Feed : [

            {Content: "C++ is the best programming lang out there, hands down!", Date: "Jan 2015"},
            {Content: "HELP IM FAILING EVERYTHING RIGHT NOW", Date: "Mar 2012"},
            {Content: "Why do none of my professors speak english??????", Date: "Mar 2012"},
            {Content: "The new spiderverse movie was SICKKKKKKKK", Date: "Mar 2012"},
            {Content: "Guess who's the best!", Date: "Mar 2012"},
            {Content: "Im so hungry q.q", Date: "April 2013"},
            {Content: "Insert pointless quote here :)", Date: "Mar 2012"}
        ]







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

        //console.log(FoundUser) 

       if (FoundUser !== null){
           res.status(200);
             res.render('Profile', {User: FoundUser});
        }
        else{
            res.status(404);
            res.send('USER DOES NOT EXIST... SORRY!');
        }
    
    
        
    });

}






