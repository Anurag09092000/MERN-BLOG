import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create } from "../controllers/post.controllers.js";
import { getposts ,deletepost} from "../controllers/post.controllers.js";

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getPosts', getposts)
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
export default router;
