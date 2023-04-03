import React, { useState } from "react";
import { useQuestion, addQuestion } from "./redux/quiz";
import Question from "./Question.jsx";

export default function Admin() {
  const [questionName, setQuestionName] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  const { questions } = useQuestion();

  function createTask() {
    const question = {
      title: questionName,
      alt1: answer1,
      alt2: answer2,
      alt3: answer3,
      correctAnswer: correctAnswer,
      id: questions.length + 1,
    };
    addQuestion(question);
  }

  return (
    <div className="bg-sky-900 py-14 px-20 h-full w-full text-white font-roboto">
      <div className="pl-8">
        <h1 className="text-2xl">ADMIN QUIZ</h1>
        <p class="py-4">Create your own questions for the quiz</p>
      </div>

      <div className="flex flex-col border-4 border-white p-8 bg-sky-700 space-y-4">
        <input
          className="text-sky-900 px-2"
          onChange={(e) => setQuestionName(e.target.value)}
          type="text"
          placeholder={"Write your question"}
        />

        <input
          className="text-sky-900 px-2"
          onChange={(e) => setAnswer1(e.target.value)}
          type="text"
          placeholder={"Answer 1"}
        />
        <input
          className="text-sky-900 px-2"
          onChange={(e) => setAnswer2(e.target.value)}
          type="text"
          placeholder={"Answer 2"}
        />
        <input
          className="text-sky-900 px-2"
          onChange={(e) => setAnswer3(e.target.value)}
          type="text"
          placeholder={"Answer 3"}
        />
        <input
          className="text-sky-900 px-2"
          onChange={(e) => setCorrectAnswer(e.target.value)}
          type="number"
          placeholder={"correct answer, type a number"}
        />

        <button
          className="text-lg border border-white py-2 px-6  mt-16 cursor-pointer bg-sky-700 hover:bg-sky-500 transition ease-in-out duration-150"
          onClick={createTask}
        >
          save task
        </button>
      </div>
      <p className="text-xl py-8 pl-8">Current questions in the quiz! </p>
      <Question />
    </div>
  );
}
