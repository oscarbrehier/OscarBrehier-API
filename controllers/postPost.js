import uniqid from "uniqid";
import Post from "../models/post.js";
import {code_201, code_400} from "../status.js";

export const postPost = async (req, res) => {

    let data = req.body;
    let id = uniqid();

    if(data.title) {

        const newPost = new Post({
            id: id,
            title: data.title,
            subtitle: data.subtitle,
            content: data.content
        });

        newPost.save()
            .catch(error => console.error(error));

        code_201(res).json({
            status: 201,
            message: 'Post created'
        });

    } else {

        code_400(res).json({
            status: 400,
            message: 'Please fill out the required content'
        });

    }

}