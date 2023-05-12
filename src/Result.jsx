import { resetQuiz, useQuestion } from "./redux/quiz";

export default function Result() {
  const { score, questions } = useQuestion();

  const numQuestions = questions.length;

  console.log(numQuestions);
  return (
    <div className="bg-galaxy bg-cover h-screen w-full text-white font-roboto pt-20 flex flex-col items-center ">
      <div className="flex flex-col font-bold items-center px-12 pt-10 pb-24 mx-2 md:mx-0 border border-white">
        <h2 className="text-3xl">Result</h2>
        <p className="text-lg mt-8">
          You scored: {score} / {numQuestions} questions
        </p>
        <button
          className="text-xl border border-white py-4 px-6 mt-16 cursor-pointer bg-sky-900 hover:bg-sky-700 transition ease-in-out duration-150"
          onClick={() => resetQuiz()}
        >
          Restart Quiz!!
        </button>
      </div>
    </div>
  );
}
