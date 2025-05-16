const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    mobileNumber:String,
    course:String,
    Institution:String,
    place:String,
    address:String,

});
const userModel = mongoose.model('user',userSchema);
module.exports = userModel;
