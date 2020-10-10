const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../MiddleWare/CheckLogin')
const Post = mongoose.model("Post")

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body} = req.body 
    if(!title || !body ){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    req.user.password = undefined
    // console.log(req.user) //getting user current
    const post = new Post({
        title,
        body,
        // photo:pic,
        postedBy:req.user
    })
    
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/allposts',requireLogin,(req,res)=>{
    
    Post.find()  //no conditions means all posts    
    .populate("postedBy","_id name")   //second argument take which filds u want to select
    // .populate("comments.postedBy","_id name")
    // .sort('-createdAt')
    .then((posts)=>{        
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})

router.get('/mypost',requireLogin,(req,res)=>{   //posts of signed in user
    Post.find({postedBy:req.user._id})  //user id logged in
    .populate("PostedBy","_id name")  //what arguments to select ?
    .then(myposts=>{
        res.json({myposts})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router