export enum Dimension {
  EI = 'EI',
  SN = 'SN',
  TF = 'TF',
  JP = 'JP',
}

export enum Meaning {
  E = 'E',
  I = 'I',
  S = 'S',
  N = 'N',
  T = 'T',
  F = 'F',
  J = 'J',
  P = 'P',
}

export interface Question {
  id: number;
  questionText: string;
  dimension: Dimension;
  direction: 1 | -1;
  meaning: Meaning;
  createdAt: Date;
}
