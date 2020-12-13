export interface IQuestion {
  id: number;
  questionText: string;
}

export interface IResponse {
  questionId: IQuestion['id'];
  rate: number;
}

export interface IQuestionsState {
  isLoading: boolean;
  questions: IQuestion[];
  responses: { [key: string]: number };
}
