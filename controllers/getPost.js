import Post from "../models/post.js";
import {code_200, code_404} from "../status.js";
import token from "../utils/token.js";

export const getPost = async (req, res) => {

    let auth = token(req, res);

    if(auth === true) {

        await Post.findOne({

            id: req.params.id

        }, (err, post) => {

            if(err) console.error(err);

            if(!post) {

                code_404(res).json({
                    status: 404,
                    message: 'Post not found'
                });

            } else {

                code_200(res).json(post);

            }

        }).clone().catch(function(err) { console.log(err )});

    }

}