import  express, {Request, Response} from 'express';
import { getAll, getOne } from '../controller/Films';
const router = express.Router();

/* GET home page. */
router.get('/', getAll);
router.get('/:id', getOne);

export default router;
