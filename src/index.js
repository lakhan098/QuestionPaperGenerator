const generateQuestionPaper = require('./questionPaperGenerator');
const { difficultyDistribution, totalMarks } = require('../data/sampleData');

const questionPaper = generateQuestionPaper(totalMarks, difficultyDistribution);

console.log('Generated Question Paper:');
console.log(questionPaper);
