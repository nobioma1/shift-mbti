import React, { useReducer } from 'react';
import questionsReducer, { questionActionTypes } from '../reducers/questions';
import { IResponse, IQuestion, IQuestionsState } from '../types/question.types';

interface IQuestionsContext extends IQuestionsState {
  setLoading(isLoading: boolean): void;
  setQuestions(questions: IQuestion[]): void;
  setResponse(response: IResponse): void;
}

const INITIAL_STATE = {
  isLoading: true,
  questions: [],
  responses: {},
};

const QuestionsContext = React.createContext<IQuestionsContext>(null!);

export const QuestionsContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(questionsReducer, INITIAL_STATE);

  const setLoading = (isLoading: boolean) => {
    dispatch({ type: questionActionTypes.SET_LOADING, payload: isLoading });
  };

  const setQuestions = (questions: IQuestion[]) => {
    dispatch({ type: questionActionTypes.SET_QUESTIONS, payload: questions });
  };

  const setResponse = (response: IResponse) => {
    dispatch({ type: questionActionTypes.SET_RESPONSE, payload: response });
  };

  const contextValue = {
    ...state,
    setLoading,
    setQuestions,
    setResponse,
  };

  return (
    <QuestionsContext.Provider value={contextValue}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContext;
