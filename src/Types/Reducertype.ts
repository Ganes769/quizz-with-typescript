export enum ActionType {
  DATA_RECIEVE = "DATA_RECIEVE",
  START = "START",
  NEXT_QUESTION = "NEXT",
  NEWANSER = "NEW_ANSWER",
  FINISH = "FINISH",
}

export interface Questions {
  options: string[];
  question: string;
  correctOption: null;
  points: number;
}
export interface QuestionType {
  questions: Questions[];
  answer?: number | string | null;
  status: string;
  index: number;
  points: number;
}
export interface DataRecieve {
  type: ActionType.DATA_RECIEVE;
  payload: [];
}
export interface Start {
  type: ActionType.START;
}
export interface NewAnswer {
  type: ActionType.NEWANSER;
  payload: number;
}

export interface Next {
  type: ActionType.NEXT_QUESTION;
}
export interface Finish {
  type: ActionType.FINISH;
}

export type Action = DataRecieve | Start | Next | NewAnswer | Finish;
