import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    id: {
        type: String,
        required: true
    },
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