import * as Knex from 'knex';
import { Dimension, Meaning } from '../../types/question.types';

const questions = [
  {
    id: 1,
    questionText:
      'You find it takes effort to introduce yourself to other people.',
    dimension: Dimension.EI,
    direction: 1,
    meaning: Meaning.I,
  },
  {
    id: 2,
    questionText: 'You consider yourself more practical than creative.',
    dimension: Dimension.SN,
    direction: -1,
    meaning: Meaning.S,
  },
  {
    id: 3,
    questionText:
      'Winning a debate matters less to you than making sure no one gets upset.',
    dimension: Dimension.TF,
    direction: 1,
    meaning: Meaning.F,
  },
  {
    id: 4,
    questionText:
      'You get energized going to social events that involve many interactions.',
    dimension: Dimension.EI,
    direction: -1,
    meaning: Meaning.E,
  },
  {
    id: 5,
    questionText:
      'You often spend time exploring unrealistic and impractical yet intriguing ideas.',
    dimension: Dimension.SN,
    direction: 1,
    meaning: Meaning.N,
  },
  {
    id: 6,
    questionText:
      'Deadlines seem to you to be of relative rather than absolute importance.',
    dimension: Dimension.JP,
    direction: 1,
    meaning: Meaning.P,
  },
  {
    id: 7,
    questionText:
      'Logic is usually more important than heart when it comes to making important decisions.',
    dimension: Dimension.TF,
    direction: -1,
    meaning: Meaning.T,
  },
  {
    id: 8,
    questionText: 'Your home and work environments are quite tidy.',
    dimension: Dimension.JP,
    direction: -1,
    meaning: Meaning.J,
  },
  {
    id: 9,
    questionText: 'You do not mind being at the center of attention.',
    dimension: Dimension.EI,
    direction: -1,
    meaning: Meaning.E,
  },
  {
    id: 10,
    questionText:
      'Keeping your options open is more important than having a to-do list.',
    dimension: Dimension.JP,
    direction: 1,
    meaning: Meaning.P,
  },
];

export async function seed(knex: Knex): Promise<void> {
  return knex('questions')
    .del()
    .then(function () {
      return knex('questions').insert(questions);
    });
}
