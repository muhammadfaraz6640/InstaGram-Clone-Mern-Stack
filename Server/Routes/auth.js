const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../Keys')
const User = mongoose.model("User")
const requireLogin = require('../MiddleWare/CheckLogin')

router.get('/Protected',requireLogin,(req,res)=>{
    res.send("Welcome Authentic User")
})

router.get('/',(req,res)=>{
    res.send("hello")
})

router.post('/signup',(req,res)=>{
    // console.log(req.body)
    const {name,email,password,pic} = req.body 
    if(!email || !password || !name){
        return res.status(422).json({error:"please add all the fields"})
     }
    //  res.json({message:"saved successfully"})
    User.findOne({email:email})
    .then((alreaysaved)=>{
        if(alreaysaved){
            return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                name ,
                email,
                password: hashedpassword 
            })
            user.save()
            .then(user=>{            
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch(err=>{
        console.log(err)
      })
})
router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(Match=>{
            if(Match){
                let user = {};
                // res.json({message:"successfully signed in"})
               const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
            //    res.json(token)
               const {_id,name,email} = savedUser
               user = {_id,name,email}
               res.json({token,user})
            //    console.log(token)
            //    console.log(user)
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
module.exports = router