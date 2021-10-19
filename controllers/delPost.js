import token from "../utils/token.js";
import Post from "../models/post.js";
import {code_200, code_404} from "../status.js";

export const delPost = async (req, res) => {

    let auth = token(req, res);

    if(auth === true) {

        Post.findOne({
            id: req.params.id
        }, (err, post) => {

            if(err) console.error(err);

            if(!post) {

                code_404(res).json({
                    status: 404,
                    message: 'Post not found'
                });

            } else {

                post.remove()
                    .catch(err => console.error(err));

                code_200(res).json({
                    status: 200,
                    message: 'Post deleted'
                })

            }

        })

    }

}