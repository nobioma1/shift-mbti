import { Dimension, Question } from '../types/question.types';

type ObjectLit<V> = { [key: string]: V };

/**
 * Get the dimension based on the
 * response for a particular question
 * @param {number} response
 * @param {Question} question
 * @return {*}
 */
const getResDimensionEnd = (response: number, question: Question) => {
  if (response > 4) {
    return question.meaning;
  }

  if (response === 4) {
    return question.dimension[0];
  }

  return question.dimension.replace(question.meaning, '');
};

/**
 * Based on the count of dimension occurrences
 * returns the dimension that occurs the more
 *
 * @param {ObjectLit<number>} dc
 * @return {*}
 */
const getDominant = (dc: ObjectLit<number>) => {
  return (dimension: Dimension) => {
    const [left, right] = dimension.split('');
    const leftCount = dc[left] || 0;
    const rightCount = dc[right] || 0;

    if (leftCount > rightCount || leftCount === rightCount) {
      return left;
    }

    return right;
  };
};

/**
 * Count dimension occurrence for each response to a question
 *
 * @return {*}
 */
export const dimensionOccurrence = () => {
  const dimensionCount: ObjectLit<number> = {};
  return (question: Question, response: number) => {
    const dimensionEnd = getResDimensionEnd(response, question);

    if (dimensionCount[dimensionEnd]) {
      dimensionCount[dimensionEnd] = dimensionCount[dimensionEnd] + 1;
    } else {
      dimensionCount[dimensionEnd] = 1;
    }

    return dimensionCount;
  };
};

/**
 * computes personality
 *
 * @param {*} dc
 * @return {*}
 */
export const computeResult = (dc: any) => {
  const getDimension = getDominant(dc);

  return `${getDimension(Dimension.EI)}${getDimension(
    Dimension.SN
  )}${getDimension(Dimension.TF)}${getDimension(Dimension.JP)}`;
};
