export const getNumCorrect = (state) => {
  return state.quiz.questions.filter(question => {
    return question.correct === true;
  }).length;
};
