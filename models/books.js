const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    id:Number,
    title: String,
    author : String,
    PublicationYear:Number,
})
module.exports=mongoose.model('books',bookSchema)