interface Props {
  numQuestions: number;
  index: number;
  points: number;
}
function Progress({ numQuestions, index, points }: Props) {
  return (
    <header className="w-1/4">
      <progress
        color=""
        className="w-full"
        value={index}
        max={numQuestions - 1}
      />
      <div className="flex justify-between text-white">
        <p>
          Questions <strong>{index + 1}</strong>/{numQuestions}
        </p>
        <p>
          <strong>{points}</strong>/250
        </p>
      </div>
    </header>
  );
}
export default Progress;
