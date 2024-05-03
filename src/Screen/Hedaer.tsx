import MySvg from "../assets/react.svg";
export default function Header() {
  return (
    <header className="flex space-x-3 mt-4">
      <img
        className="h-16 w-16 animate-spin duration-20s linear infinite"
        src={MySvg}
        alt="React logo"
      />
      <h1 className="text-white text-[36px] font-bold">The React Quiz</h1>
    </header>
  );
}
