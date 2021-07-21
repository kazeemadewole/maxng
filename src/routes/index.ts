import  express from 'express';
import { getAll, getOne } from '../controller/Films';
var router = express.Router();

/* GET home page. */
router.get('/',getAll);
router.get('/:id', getOne);

export default router;
