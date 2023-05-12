import { answerQuestion, useQuestion } from "./redux/quiz";
export default function Quiz() {
  const { questions, currentQuestion } = useQuestion();
  return (
    <div className="bg-galaxy bg-cover h-screen w-full text-white font-roboto">
      <ul className="flex flex-col items-center pt-20 mx-2 md:mx-0">
        <li key={questions[currentQuestion]?.id}>
          <div className="text-xl text-center md:text-start">
            {questions[currentQuestion]?.title}
          </div>

          <button
            className="md:text-xl border border-white py-4 mt-8 cursor-pointer hover:bg-sky-700 transition ease-in-out duration-150 w-full"
            onClick={() => answerQuestion(1)}
          >
            {questions[currentQuestion]?.alt1}
          </button>
          <button
            className="md:text-xl border border-white py-4 mt-8 cursor-pointer hover:bg-sky-700 transition ease-in-out duration-150 w-full"
            onClick={() => answerQuestion(2)}
          >
            {questions[currentQuestion]?.alt2}
          </button>
          <button
            className="md:text-xl border border-white py-4 mt-8 cursor-pointer hover:bg-sky-700 transition ease-in-out duration-150 w-full"
            onClick={() => answerQuestion(3)}
          >
            {questions[currentQuestion]?.alt3}
          </button>
        </li>
      </ul>
    </div>
  );
}
