import { Router } from 'express';
import { getAll } from '../controllers/QuestionController';

const questionsRouter = Router();

questionsRouter.get('/', getAll);

export default questionsRouter;
