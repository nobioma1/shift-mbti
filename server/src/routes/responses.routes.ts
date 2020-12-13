import { Router } from 'express';
import { body } from 'express-validator';
import { userExists } from '../middlewares/userExists';
import { validateRequest } from '../middlewares/validate-request';
import { userDoesNotExist } from '../middlewares/userDoesNotExist';
import {
  newPersonality,
  userPersonality,
} from '../controllers/ResponseController';

const responsesRouter = Router();

responsesRouter.post(
  '/new',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('responses').custom((value) => {
      const responses = Object.values(value);

      if (responses.length < 10) {
        throw Error('Incomplete number of questions');
      }
      responses.forEach((response: any) => {
        if (response < 1 || response > 7) {
          throw Error(
            'Response has to be greater than 0 and less than or equal to 7'
          );
        }
      });

      return true;
    }),
  ],
  validateRequest,
  userDoesNotExist,
  newPersonality
);

responsesRouter.post(
  '/',
  [body('email').isEmail().withMessage('Invalid email')],
  validateRequest,
  userExists,
  userPersonality
);

export default responsesRouter;
