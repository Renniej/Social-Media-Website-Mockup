const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Create Model <3


const FeedSchema = new Schema({

    Author:  String,
    Content: String,
    Date : String,

})


const UserSchema = new Schema({

    Username : String,
    Pass : String,
    NickName : String,
    Desc : String, 
    Province : String,
    Country : String,
    DOB : String,
    Joined : String,
    Email : String,
    Vertified : Boolean,

    Feed : [FeedSchema]

})

const User = mongoose.model('Users', UserSchema);

module.exports = User;