// This file adds interactive features to the website, such as quizzes or dynamic content updates based on user input.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interactive quiz feature
    const quizButton = document.getElementById('quiz-button');
    const quizContainer = document.getElementById('quiz-container');

    if (quizButton) {
        quizButton.addEventListener('click', function() {
            quizContainer.classList.toggle('active');
            if (quizContainer.classList.contains('active')) {
                quizButton.textContent = 'Hide Quiz';
            } else {
                quizButton.textContent = 'Show Quiz';
            }
        });
    }

    // Dynamic content update example
    const inputField = document.getElementById('dynamic-input');
    const outputField = document.getElementById('dynamic-output');

    if (inputField) {
        inputField.addEventListener('input', function() {
            outputField.textContent = inputField.value;
        });
    }
});



