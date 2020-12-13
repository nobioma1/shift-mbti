import React, { useContext } from 'react';
import QuestionsContext from '../../contexts/QuestionsContext';
import Question from './Question';

const Questions = () => {
  const { questions } = useContext(QuestionsContext);

  return (
    <div>
      <div>
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
