import express from "express";
const router = express.Router();

// Controllers
import {postPost} from "../controllers/postPost.js";
import {getPosts} from "../controllers/getPosts.js";
import {getPost} from "../controllers/getPost.js";
import {delPost} from "../controllers/delPost.js";
import { code_202 } from "../status.js";

router.get('/', (req, res) => {
    code_202(res).json({
        status: 200,
    });
})
router.post('/post', postPost);
router.get('/post', getPosts);
router.get('/post/:id', getPost);
router.delete('/post/:id', delPost);

export default router;















