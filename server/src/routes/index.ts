import { Router } from 'express';
import questionsRouter from './questions.routes';
import responsesRouter from './responses.routes';

const appRouter = Router();

appRouter.get('/', (req, res) => {
  return res.status(200).send({ message: 'Welcome to Shift MBTI API' });
});
appRouter.use('/questions', questionsRouter);
appRouter.use('/responses', responsesRouter);

export default appRouter;
