import db from '../../db';
import {
  computeResult,
  dimensionOccurrence,
} from '../../util/computePersonality';
import { IResponse, ResponseType } from '../../types/response.types';
import { User } from '../../types/user.types';
import { Question } from '../../types/question.types';

export async function getResponseByUser(
  userId: User['id']
): Promise<IResponse[]> {
  return db<IResponse>('responses').where({
    userId,
  });
}

export async function createAndSave(response: {
  userId: User['id'];
  questionId: Question['id'];
  response: IResponse['response'];
}) {
  return db<IResponse>('responses').insert(response);
}

export async function compute(
  questions: any,
  userResponses: IResponse[]
): Promise<string> {
  const countDimension = dimensionOccurrence();

  const responses = userResponses.reduce<{ [key: string]: number }>(
    (acc, curr) => {
      if (!acc[curr.questionId]) {
        acc[curr.questionId] = curr.response;
      }

      return acc;
    },
    {}
  );

  let dimensionCount;

  for (let i = 0; i < questions.length; i++) {
    const questionResponse = responses[questions[i].id];

    dimensionCount = countDimension(questions[i], questionResponse);
  }

  return computeResult(dimensionCount);
}

export async function saveAndCompute(
  questions: any,
  responses: ResponseType,
  userId: number
): Promise<string> {
  const countDimension = dimensionOccurrence();

  let dimensionCount;

  for (let i = 0; i < questions.length; i++) {
    const questionResponse = responses[questions[i].id];
    await createAndSave({
      userId,
      questionId: questions[i].id,
      response: questionResponse,
    });

    dimensionCount = countDimension(questions[i], questionResponse);
  }

  return computeResult(dimensionCount);
}
