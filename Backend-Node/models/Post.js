const mongoose = require('mongoose');

const MongooseSchema = mongoose.Schema({
    title:{type:String,required:true,unique:true},
    category:{type:String,required:true},
    amount:{type:Number,required:true},
    date:{type:String,required:true}
});

module.exports = mongoose.model('Post',MongooseSchema);
