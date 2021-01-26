const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema
const UserDetailsSchema = new Schema({
    id: Number,
    name:String,
    age:String,
    gender:String,
    email:String,
    phoneNo:String

});

// Model 
const UserDetails = mongoose.model('UserDetails',UserDetailsSchema);

module.exports = UserDetails;