import React, { useContext, useRef } from 'react';
import Rating from '../rating';
import { IResponse, IQuestion } from '../../types/question.types';
import { QuestionWrapper } from './questions.styled';
import QuestionsContext from '../../contexts/QuestionsContext';

interface IQuestionProps extends IQuestion {}

const Question = ({ id, questionText }: IQuestionProps) => {
  const elRef = useRef<HTMLDivElement>(null);
  const { setResponse, responses } = useContext(QuestionsContext);

  return (
    <QuestionWrapper id={`q-${id}`} ref={elRef}>
      <h3>{questionText}</h3>
      <Rating
        questionId={id}
        rate={responses[id] || 0}
        setRate={(newRate: IResponse['rate']) => {
          if (elRef.current && elRef.current.dataset['error']) {
            delete elRef.current.dataset['error'];
          }
          setResponse({
            questionId: id,
            rate: newRate,
          });
        }}
      />
    </QuestionWrapper>
  );
};

export default Question;
