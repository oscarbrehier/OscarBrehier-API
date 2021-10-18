import express from "express";
const router = express.Router();

// Controllers
import {postPost} from "../controllers/postPost.js";
import {getPosts} from "../controllers/getPosts.js";
import {getPost} from "../controllers/getPost.js";
import {token} from "../controllers/token.js";

router.post('/post', postPost);
router.get('/post', getPosts);
router.get('/post/:id', getPost);
router.get('/token', token);

export default router;















