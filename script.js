let currentQuestionIndex = 0;
const questions = [
    // Populate this array with your questions and answers
    // Example: { question: "Question 1", answers: ["Option A", "Option B", "Option C", "Option D"] },
    // ...
];

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answerOptionsElement = document.getElementById('answer-options');
    
    questionElement.innerText = questions[currentQuestionIndex].question;
    answerOptionsElement.innerHTML = '';

    questions[currentQuestionIndex].answers.forEach(answer => {
        const answerDiv = document.createElement('div');
        answerDiv.innerText = answer;
        answerOptionsElement.appendChild(answerDiv);
    });
}

function setupNextButton() {
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            alert('End of questions');
        }
    });
}

displayQuestion();
setupNextButton();
