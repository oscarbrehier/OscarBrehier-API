import express from "express";
import uniqid from 'uniqid';
import Post from "../models/post.js";
const router = express.Router();

const basic = {
    message: 'Success',
    status: 200
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

    res.json(basic);

});

router.get('/posts', (req, res) => {

    res.json(basic);

});

export default router;