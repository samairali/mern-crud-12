const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    postCategory: {
        required: true,
        type: String
    }
})
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;