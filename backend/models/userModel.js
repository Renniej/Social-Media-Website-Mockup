const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Create Model <3

const FeedSchema = new Schema({

    Author:  String,
    UserId : String,
    Content: String,
    Date : String,

})


const UserSchema = new Schema({

    Username : {

        type : String,
        required : true,
        unique : true

    } ,
    
    Pass : String,
    NickName : String,
    Desc : String, 
    Province : String,
    Country : String,
    DOB : Date,
    Joined : Date,
    
    Email : {
        type : String,
        required : true,
        unique : true
    },
    Vertified : Boolean,

    Feed : [FeedSchema]

})

const User = mongoose.model('Users', UserSchema);

module.exports = User;