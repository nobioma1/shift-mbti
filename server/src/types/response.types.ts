export type ResponseType = { [key: string]: number };

export interface IResponse {
  id: number;
  response: number;
  userId: number;
  questionId: number;
  createdAt: Date;
}
