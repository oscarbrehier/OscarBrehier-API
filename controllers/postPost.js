import uniqid from "uniqid";
import Post from "../models/post.js";

export const postPost = async (req, res) => {

    let data = req.body;
    let id = uniqid();

    const newPost = new Post({
        id: id,
        title: data.title,
        subtitle: data.subtitle,
        content: data.content
    });

    newPost.save()
        .then(result => console.log(result))
        .catch(error => console.error(error));

    res.json({
        code: 202,
        message: 'Post created'
    });

}