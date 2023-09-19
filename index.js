const express = require('express')
const bodyParser = require("body-parser")
const booksRouter = require("./routes/books")
const connectToDb = require('./utils/connect')

const PORT = process.env.PORT || 3333

const app = express()

connectToDb("mongodb+srv://idkbharti:oClfa10OJns7U9HX@nifty.zvk1hom.mongodb.net/?retryWrites=true&w=majority")

app.use(bodyParser.json())
app.use("/api",booksRouter)

app.listen(PORT, ()=>{`server is running at PORT${PORT}`})