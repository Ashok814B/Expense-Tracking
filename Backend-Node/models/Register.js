const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
   firstName:{type:String,required:true},
   lastName:{type:String,required:true},
   email:{type:String,required:true,unqiue:true},
   password:{type:String,required:true} 
});

module.exports = mongoose.model('Register',mongooseSchema);