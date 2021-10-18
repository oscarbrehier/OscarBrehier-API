import Post from "../models/post.js";

export const getPosts = async (req, res) => {

    try {

        const Posts = await Post.find();
        res.status(200).json(Posts);

    } catch (error) {

        console.error(error);
        res.json({
            code: 404,
            error: error
        });

    }

}