import { useEffect, useState } from "react";
import { ActionType, Questions } from "../Types/Reducertype";

interface QuestionsProps {
  dispatch: Function;
  answer: number;
  index: number;
  question: Questions[];
}

export default function QuestionsComponent({
  dispatch,
  index,
  question,
}: QuestionsProps) {
  const questionindex = question[index];
  const [selecteditem, isselectedItem] = useState(false);
  function handleclick(index: number) {
    dispatch({ type: ActionType.NEWANSER, payload: index });
    isselectedItem(true);
    setTimeout(() => {
      dispatch({ type: ActionType.NEXT_QUESTION });
    }, 500);
  }
  useEffect(
    function () {
      isselectedItem(false);
    },
    [index]
  );
  if (index == 15) {
    dispatch({ type: ActionType.FINISH });
  }
  return (
    <div className="m-4 space-y-4 w-1/2 flex flex-col  items-center ">
      <h2 className="text-xl mb-4 text-white">{questionindex.question}</h2>
      {questionindex.options.map((option, index) => (
        <button
          disabled={selecteditem}
          key={option}
          onClick={() => handleclick(index)}
          className={`${
            selecteditem
              ? index === questionindex.correctOption
                ? "bg-green-500 transition-all move-animation translate-x-2 "
                : "bg-gray-500"
              : ""
          } ${
            selecteditem && "cursor-not-allowed"
          } text-white cursor-pointer bg-gray-800 rounded-full text-center block h-12 w-2/3 border-gray-300 border p-7cursor-pointer `}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
