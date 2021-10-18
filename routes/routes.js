import express from "express";
import uniqid from 'uniqid';
import Post from "../models/post.js";
const router = express.Router();

const successMessage = {
    message: 'Success',
    status: 200
};

const errorMessage = {
    message: 'Error'
};

router.post('/post', (req, res) => {

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

    res.json(successMessage);

});

router.get('/post', async (req, res) => {

    try {

        const Posts = await Post.find();
        res.status(200).json(Posts);

    } catch (error) {

        console.error(error);
        res.json(errorMessage);

    }

});

router.get('/post/:id', async (req, res) => {

    await Post.findOne({

        id: req.params.id

    }, (err, post) => {

        if(err) console.error(err);

        if(!post) {

            res.json({
                message: 'No post found with the provided id'
            });

        } else {

            res.json(post);

        }

    }).clone().catch(function(err) { console.log(err )});

})

export default router;















