import db from '../../db';
import { Question } from '../../types/question.types';

export async function getAllQuestions(selectFields?: string[]) {
  return db<Question>('questions').select(selectFields || '*');
}
