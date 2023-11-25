const questionStore = require("./questionStore");
const questionWeight = require('../data/questionWeight');

const generateQuestionPaper = (totalMarks, difficultyDistribution) => {
    const questionPaper = [];
  
    for (const difficulty in difficultyDistribution) {
      const percentage = difficultyDistribution[difficulty];
      const difficultyQuestions = getQuestionsByDifficulty(difficulty, percentage, totalMarks);
      questionPaper.push(...difficultyQuestions);
    }
  
    return questionPaper;
};
  
const getQuestionsByDifficulty = (difficulty, percentage, totalMarks) => {
    const questions = questionStore.filter((question) => question.difficulty === difficulty);
    const totalQuestions = Math.ceil((percentage / 100) * (totalMarks / questionWeight[difficulty]));
    return questions.slice(0, totalQuestions);
};

module.exports = generateQuestionPaper;
  