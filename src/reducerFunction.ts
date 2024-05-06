import { createContext } from "react";
import { Action, ActionType, QuestionType } from "./Types/Reducertype";
const QuizzContext = createContext<null>(null);
export const initsatate: QuestionType = {
  questions: [],
  status: "loading",
  points: 0,
  answer: null,
  index: 0,
};

export function quizzReducer(state = initsatate, action: Action) {
  switch (action.type) {
    case ActionType.DATA_RECIEVE: {
      return {
        ...state,
        questions: action.payload,
        status: "active",
      };
    }

    case ActionType.START: {
      return {
        ...state,
        status: "ready",
      };
    }
    case ActionType.DATA_FAILED: {
      return {
        ...state,
        status: "error",
      };
    }
    case ActionType.NEWANSER: {
      const question = state.questions[state.index];
      if (
        question &&
        typeof action.payload == "number" &&
        typeof question.correctOption == "number"
      ) {
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload == question.correctOption
              ? state.points + question.points
              : state.points,
        };
      }
      return state;
    }
    case ActionType.NEXT_QUESTION: {
      if (state.index < state.questions.length - 1) {
        return { ...state, index: state.index + 1, answer: null };
      }
      return state;
    }
    case ActionType.FINISH: {
      return {
        ...state,
        status: "finish",
      };
    }
    default:
      return state;
  }
}
