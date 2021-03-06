import Post from "../models/post.js";
import token from "../utils/token.js";
import {code_200, code_404} from "../status.js";

export const getPosts = async (req, res) => {

    const auth = token(req, res);

    if(auth === true) {

        try {

            const Posts = await Post.find();
            code_200(res).json(Posts);

        } catch (error) {

            console.error(error);
            code_404(res).json({
                status: 404,
                error: error
            });

        }

    }

}