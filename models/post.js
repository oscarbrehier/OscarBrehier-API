import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    name: String,
    description: String,
    languages: String,
    githubURL: String,

});

const Post = mongoose.model('Posts', postSchema);
export default Post;