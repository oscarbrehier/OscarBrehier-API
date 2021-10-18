import Post from "../models/post.js";

export const getPost = async (req, res) => {

    await Post.findOne({

        id: req.params.id

    }, (err, post) => {

        if(err) console.error(err);

        if(!post) {

            res.json({
                code: 404,
                message: 'Post not found'
            });

        } else {

            res.json(post);

        }

    }).clone().catch(function(err) { console.log(err )});

}