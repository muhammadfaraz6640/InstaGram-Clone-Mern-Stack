const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../Keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")



module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    // res.send(authorization)    
    if(!authorization){
       return res.status(401).json({error:"you must be logged in 1"})
    }    
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload   //payload contains all data of authentic user
        User.findById(_id).then(userdata=>{
            req.user = userdata
            console.log(userdata)
            next()  //means proceed route then
        })
        
        
    })
}