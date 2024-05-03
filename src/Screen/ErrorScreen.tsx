const ErrorComponent = () => {
  return (
    <div className="bg-red-100 border m-4 border-red-400 text-red-700 px-4 py-3 rounded relative">
      <strong className="font-bold">Wait!</strong>
      <span className="block sm:inline">
        {" "}
        There was delay fecthing questions.
      </span>
    </div>
  );
};

export default ErrorComponent;
