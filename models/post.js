import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    subtitle: String,
    content: {
        type: String,
        required: true,
    },

});

const Post = mongoose.model('Posts', postSchema);
export default Post;