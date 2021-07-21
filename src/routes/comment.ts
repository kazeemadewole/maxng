import  express from 'express';
import {createComment, editComment, getAllComment, getCommentById} from '../controller/comment'
const router = express.Router();

/* GET home page. */
router.post('/createComment/:id', createComment);
router.get('/getAllComment', getAllComment);
router.get('/getOne/:id', getCommentById)
router.get('/one', editComment)

export default router