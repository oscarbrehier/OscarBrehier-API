import uniqid from "uniqid";
import token from "../utils/token.js";
import Post from "../models/post.js";
import {code_201, code_400} from "../status.js";

export const postPost = async (req, res) => {

    let data = req.body;
    let id = uniqid();
    let auth = token(req, res);

    if(auth === true) {

        if(data.name) {

            const newPost = new Post({
                id: id,
                name: data.name,
                description: data.description,
                languages: data.language,
                githubURL: data.githubURL,
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

}