import { IQuestionsState } from '../types/question.types';

export enum questionActionTypes {
  SET_LOADING,
  SET_QUESTIONS,
  SET_RESPONSE,
}

const questionsReducer = (state: IQuestionsState, action: any) => {
  switch (action.type) {
    case questionActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case questionActionTypes.SET_QUESTIONS:
      return { ...state, isLoading: false, questions: action.payload };
    case questionActionTypes.SET_RESPONSE:
      return {
        ...state,
        responses: {
          ...state.responses,
          [action.payload.questionId]: action.payload.rate,
        },
      };
    default:
      return state;
  }
};

export default questionsReducer;
