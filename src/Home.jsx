import Result from "./Result.jsx";
import Quiz from "./Quiz";
import { useQuestion, startQuiz } from "./redux/quiz";

export default function Home() {
  const { quizStarted, showResult } = useQuestion();

  function renderPart() {
    if (showResult) {
      return <Result />;
    } else if (quizStarted) {
      return <Quiz />;
    } else {
      return (
        <div className="bg-galaxy bg-cover h-screen w-full text-white font-roboto">
          <div className="flex flex-col items-center pt-32 md:pt-20 px-6 md:px-0">
            <h1 className="text-2xl md:text-3xl">
              Challenge your knowledge on this quiz
            </h1>
            <button
              className="text-3xl border border-white py-4 px-6 mt-16 cursor-pointer hover:bg-sky-700 transition ease-in-out duration-150 "
              onClick={startQuiz}
            >
              Start Quiz
            </button>
          </div>
        </div>
      );
    }
  }
  return <div>{renderPart()}</div>;
}
