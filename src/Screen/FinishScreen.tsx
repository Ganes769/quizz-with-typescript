import { Action } from "../Types/Reducertype";

interface Props {
  points: number;
  dispatch: React.Dispatch<Action>;
}

export default function FinishScreen({ points }: Props) {
  return (
    <>
      <p className="m-4 text-white">
        You score <strong>{points}</strong> Out of <strong>280</strong>
      </p>
    </>
  );
}
