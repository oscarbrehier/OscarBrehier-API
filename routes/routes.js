import express from "express";
const router = express.Router();

let posts = [];

router.post('/post', (req, res) => {

   let post = req.body;
   console.log(post);
   posts.push(post)
   res.json({
       message: 'Post Created',
       status: 200
   });

});

router.get('/post', (req, res) => {

    res.json(posts);

});

export default router;