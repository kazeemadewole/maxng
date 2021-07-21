import  express from 'express';
import { MovieCharacters } from '../controller/Character';
const router = express.Router();

/* GET home page. */
router.get('/:id',MovieCharacters);

export default router;