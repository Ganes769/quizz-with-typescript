interface Props {
  points: number;
  dispatch: Function;
}

export default function FinishScreen({ points, dispatch }: Props) {
  return (
    <>
      <p className="m-4 text-white">
        You score <strong>{points}</strong> Out of <strong>280</strong>
      </p>
    </>
  );
}
