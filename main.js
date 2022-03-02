// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);

// Event Function
function markQuiz() {
    // Initialize Score
    let score = 0;

    // Mark questions 
    score += markQuestion(1, "canada");
    score += markQuestion(2, "cardinal");
    score += markQuestion(3, "tai lung");
    score += markQuestion(4, "pickleball");

    // Display Quiz Results
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = Math.round(score / 4 * 100);

    // Define and invoke - local & global variables - organized
    // Parameters & arguments - pass data into a function - efficiency
    //return values - return data from a function
    function markQuestion(qNum, correctAnswer) {
        let userAanswer = document.getElementById('answer' + qNum).value;
        userAanswer = userAanswer.toLowerCase();

        let result1El = document.getElementById('result' + qNum);
        if (userAanswer == correctAnswer) {
            result1El.innerHTML = 'Correct';
            result1El.style.color = 'green';
            return 1;
        } else {
            result1El.innerHTML = 'Incorrect';
            result1El.style.color = 'red';
            return 0;
        }
    }
}
