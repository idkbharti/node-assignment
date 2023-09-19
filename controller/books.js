const Book= require("../models/books")

const getAllBooks=async(req,res)=>{
    try {
        const data = await Book.find()
        res.status(200).json({Books:data})
        
    } catch (error) {
        res.status(4500).json({message:error.message})
    }

}

const getBookById=async(req,res)=>{
    try {
        const {id}=req.params; 
        const data = await Book.findById(id)

        if(!data){
            return res.status(400).json({message:"Book not found"})
        }
        res.status(200).json({Books:data})
        
    } catch (error) {
        res.status(4500).json({message:error.message})
    }

}

const addBook=async(req,res)=>{
    try {
        const {id,title,author,publicationYear}=req.body; 
        const data = await Book.create({id,title,author,publicationYear})

        res.status(200).json({message:"Book added Sucessfully"})
        
    } catch (error) {
        res.status(4500).json({message:error.message})
    }

}

const updateBookDetails=async(req,res)=>{
    try {
        const {id}=req.params; 
        const {updatedDetails}=req.body;
        const data = await Book.findByIdAndUpdate(id,updatedDetails)

        if(!data){
            return res.status(400).json({message:"Book not found"})
        }
        res.status(200).json({data})
        
    } catch (error) {
  
        res.status(4500).json({message:error.message})

    }

}

const deleteBook=async(req,res)=>{
    try {
        const {id} = req.param;
        

        if(!data){
            return res.status(400).json({message:"Book not found"})
        }else{
            const data = await Book.findByIdAndDelete(id)
            res.status(200).json({message:"Book deleted succesfully"})

        }
        
    } catch (error) {
        res.status(4500).json({message:error.message})

    }

}

module.exports={getAllBooks,getBookById,updateBookDetails,deleteBook,addBook}