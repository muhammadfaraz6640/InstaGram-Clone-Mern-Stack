const express = require('express')
const app = express()
const port = 5000
const {MONGOURI} = require("./Keys")
const mongoose = require('mongoose')


mongoose.connect(MONGOURI,[
    useNewUrlParser = true,
    useUnifiedTopology = true
])
mongoose.connection.on("connected",()=>{
    console.log("connected")
})
require('./Models/User')
require('./Models/Post')

app.use(express.json())

app.use(require('./Routes/auth'))
app.use(require('./Routes/Post'))
mongoose.connection.on("error",(err)=>{
    console.log("not connected",err)
})

//0123faraz@NED@faraz
//Faraz
app.listen(port,()=>{
    console.log("server is running on port 5000")
})