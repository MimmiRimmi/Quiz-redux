import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizStarted: false,
  showResult: false,
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      title: "Vad heter huvudstaden i Sverige?",
      alt1: "Malmö",
      alt2: "Göteborg",
      alt3: "Stockholm",
      correctAnswer: 3,
      id: 1,
    },
    {
      title: "Vilket år bytte Sverige till högertrafik?",
      alt1: "1967",
      alt2: "1977",
      alt3: "1987",
      correctAnswer: 1,
      id: 2,
    },
    {
      title: "Vilket land tillhör inte i Skandinavien?",
      alt1: "Finland",
      alt2: "Sverige",
      alt3: "Danmark",
      correctAnswer: 1,
      id: 3,
    },
  ],
};

export const [
  useQuestion,
  {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    startQuiz,
    answerQuestion,
    resetQuiz,
  },
] = createReduxModule("question", initialState, {
  addQuestion: (state, question) => {
    const oldQuestion = state.questions;
    const newQuestion = [...oldQuestion, question];
    return { ...state, questions: newQuestion };
  },
  deleteQuestion: (state, objectID) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== objectID),
    };
  },
  updateQuestion: (state, updatedQuestion) => {
    return {
      ...state,
      questions: state.questions.map((question) => {
        if (question.id == updatedQuestion.id) {
          return updatedQuestion;
        }
        return question;
      }),
    };
  },
  startQuiz: (state) => {
    return {
      ...state,
      quizStarted: true,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
  answerQuestion: (state, answer) => {
    const score =
      state.score +
      (answer == state.questions[state.currentQuestion]?.correctAnswer ? 1 : 0);
    if (state.currentQuestion === state.questions.length - 1) {
      return {
        ...state,
        score,
        showResult: true,
        quizStarted: false,
      };
    } else {
      return {
        ...state,
        score,
        currentQuestion: state.currentQuestion + 1,
      };
    }
  },
  resetQuiz: (state) => {
    return {
      ...state,
      quizStarted: false,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
});
