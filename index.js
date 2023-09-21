const express = require('express')
const bodyParser = require("body-parser")
require('dotenv').config()
const booksRouter = require("./routes/books")
const connectToDb = require('./utils/connect')

const PORT = process.env.PORT || 3333

const app = express()
connectToDb(process.env.MURI)

app.use(bodyParser.json())
app.use("/api",booksRouter)

app.listen(PORT, ()=>{`server is running at PORT${PORT}`})