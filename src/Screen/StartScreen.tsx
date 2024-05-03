import { Action, ActionType } from "../Types/Reducertype";

interface numQuestion {
  numQuestion: number;
  dispatch: React.Dispatch<Action>;
  status: string;
}

export default function StartScreen({ numQuestion, dispatch }: numQuestion) {
  function handlestart() {
    dispatch({ type: ActionType.START });
  }
  return (
    <>
      <h2 className="text-white uppercase text-md ">Welcome To React Quizz</h2>
      <h3 className="text-white">
        {numQuestion} Question to check your react skill
      </h3>
      <button
        onClick={handlestart}
        className="mt-4 bg-gray-700 text-white px-5 py-2 rounded-full"
      >
        Lets Start
      </button>
    </>
  );
}
