import { Request, Response } from 'express';
import { getAllQuestions } from '../db/models/question.model';

export async function getAll(req: Request, res: Response) {
  const questions = await getAllQuestions(['id', 'questionText']);

  return res.status(200).send({ questions });
}
