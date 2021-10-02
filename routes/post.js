const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
router.get("/",(req,res) => {
    Post.find().exec((err,posts) => {
        if(err) res.status(404).json({success: false})
        res.status(200).json({success: true, posts})
    })
})
router.get("/details/:id",(req,res) => {
    Post.findById(req.params.id).exec((err,post) => {
        if(err) res.status(404).json({success:false})
        res.status(200).json({success:true, post});
    })
})
router.post("/add", (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        postCategory: req.body.postCategory
    })
    post.save((err) => {
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true})
    })
})
router.put("/update/:id", (req,res) => {
    Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        postCategory: req.body.postCategory
    }).then(() => {
        res.status(200).json({status: "post updated success"});
    }).catch((err) => {
        console.log(err);
    })
})
router.delete("/delete/:id",(req,res) => {
    Post.findByIdAndRemove(req.params.id).exec(err => {
        if(err) res.status(404).json({success:false});
        res.status(200).json({success:true})
    })
})
module.exports = router;