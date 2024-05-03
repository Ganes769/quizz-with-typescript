import { useEffect, useReducer } from "react";
import "./index.css";
import axios from "axios";
import { ActionType } from "./Types/Reducertype";
import StartScreen from "./Screen/StartScreen";
import Header from "./Screen/Hedaer";

import { initsatate, quizzReducer } from "./reducerFunction";
import FinishScreen from "./Screen/FinishScreen";
import Progress from "./Screen/Progress";
import QuestionsComponent from "./Screen/Questions";

function App() {
  useEffect(function () {
    async function getQuestion() {
      const data = await axios.get("http://localhost:3000/questions");
      const questions = data.data;
      dispatch({ type: ActionType.DATA_RECIEVE, payload: questions });
    }
    getQuestion();
  }, []);

  const [{ questions, status, index, answer, points } = initsatate, dispatch] =
    useReducer(quizzReducer, initsatate);
  const numQuestion = questions.length;
  return (
    <div className="bg-[#353B40] flex flex-col justify-center items-center h-screen w-full">
      <Header />
      {status == "active" && (
        <StartScreen
          status={status}
          dispatch={dispatch}
          numQuestion={numQuestion}
        />
      )}
      {status === "ready" && (
        <>
          <Progress numQuestions={numQuestion} index={index} points={points} />

          <QuestionsComponent
            numQuestion={numQuestion}
            answer={+(answer || "")}
            index={index}
            dispatch={dispatch}
            question={questions}
          />
        </>
      )}
      {status === "finish" && (
        <FinishScreen dispatch={dispatch} points={points} />
      )}
    </div>
  );
}

export default App;
