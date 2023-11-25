# QuestionPaperGenerator
Steps to follow and run the application
1. Clone the Repository
    ```bash
    git clone https://github.com/your-username/QuestionPaperGenerator.git
    cd QuestionPaperGenerator
    ```

2. Install Dependencies
    ```bash
    npm install
    ```

3. Update Sample Data in data/sampleData.js
    ```bash
    module.exports = {
    difficultyDistribution: {
        Easy: 20,
        Medium: 50,
        Hard: 30,
    },
    totalMarks: 10,
    };
    ```

4. add questions in src/questionStore.js accordingly

5. Customize Marks for each difficulty level in data/questionWeight.js accordingly

6. Run the Application
    ```bash
    node src/index.js
    ```




