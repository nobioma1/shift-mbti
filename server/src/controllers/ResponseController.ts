import { Request, Response } from 'express';
import { getAllQuestions } from '../db/models/question.model';
import {
  compute,
  getResponseByUser,
  saveAndCompute,
} from '../db/models/response.model';
import { createAndSave } from '../db/models/user.model';
import { NotFoundError } from '../common/errors';

export async function newPersonality(req: Request, res: Response) {
  const { body } = req;

  const user = await createAndSave(body.email);
  const questions = await getAllQuestions();

  const personality = await saveAndCompute(questions, body.responses, user!.id);

  return res.status(200).send({
    personality,
  });
}

export async function userPersonality(req: Request, res: Response) {
  const { user } = req;

  const questions = await getAllQuestions();

  const prevResponses = await getResponseByUser(user.id);

  if (prevResponses.length === 0) {
    throw new NotFoundError('User has no responses');
  }

  const personality = await compute(questions, prevResponses);
  return res.status(200).send({
    personality,
    responses: prevResponses,
  });
}
