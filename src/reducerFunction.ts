import { Action, ActionType, QuestionType } from "./Types/Reducertype";

export const initsatate: QuestionType = {
  questions: [],
  status: "loading",
  points: 0,
  answer: null,
  index: 0,
};
export function quizzReducer(state = initsatate, action: Action): QuestionType {
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

    case ActionType.NEWANSER: {
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload == question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case ActionType.NEXT_QUESTION: {
      return { ...state, index: state.index + 1, answer: null };
    }
    case ActionType.FINISH: {
      return {
        ...state,
        status: "finish",
      };
    }
    default:
      throw new Error("error");
  }
}
