interface NextProps {
  answer: number;
  dispatch: Function;
}

export default function NexButton({ dispatch, answer }: NextProps) {
  if (answer == null) return null;
  <button onClick={() => dispatch({ type: "NEXT" })} className="text-white">
    Next
  </button>;
}
