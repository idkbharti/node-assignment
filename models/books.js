const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {type:String,required:true,unique:true},
    author : {type:String,required:true},
    publicationYear:Number,
})
module.exports=mongoose.model('books',bookSchema)