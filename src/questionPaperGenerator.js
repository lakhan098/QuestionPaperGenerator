const questionStore = require("./questionStore");

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
    const totalQuestions = Math.ceil((percentage / 100) * (totalMarks / questionWeight(difficulty)));
    return questions.slice(0, totalQuestions);
};
  
const questionWeight = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 1;
      case 'Medium':
        return 2;
      case 'Hard':
        return 3;
      default:
        throw new Error(`Invalid difficulty: ${difficulty}`);
    }
};
  
module.exports = generateQuestionPaper;
  