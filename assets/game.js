// Get placeholder for question and answers
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');  
const scoreText = document.getElementById('score');
const timer = document.getElementById('time');

// Varibles
let currentQuestion = [];
let accpetingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Question and Answers
let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<js>",
        choice2: "<scripting>",
        choice3: "<javascript>",
        choice4: "<script>",
        answer: 4
    },
    {
        question: "What is the correct syntax for referring to an external script called 'game.js'?",
        choice1: "<script name='game.js'>",
        choice2: "<script src='game.js'>",
        choice3: "<script rel='game.js'>",
        choice4: "<script href='game.js'>",
        answer: 2
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choice1: "var colors = ['red', 'blue', 'yellow']",
        choice2: "var colors = 'red', 'blue', 'yellow'",
        choice3: "var colors = (1:'red', 2:'blue', 3:'yellow']",
        choice4: "var colors = ('red'), ('blue'), ('yellow')",
        answer: 1
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choice1: "onmouseclick",
        choice2: "onclick",
        choice3: "onchange",
        choice4: "listen",
        answer: 2
    },
    {
        question: "Which of the dislog box displays a message and a data entry field?",
        choice1: "alert()",
        choice2: "msg()",
        choice3: "confirm()",
        choice4: "prompt()",
        answer: 4
    },
];

const correctBonus = 10;
const maxQuestion = 5;
var secondsLeft = 20

// functions

function clock() {
    
    timer.textContent = secondsLeft;
    clearInterval(time);
    secondsLeft = 20;

    var time = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            window.location.assign('./gameOver.html');
            
        } 
    }, 1000);
}


getNewQuestion = () => {
    if (availableQuestions.length == 0 || questionCounter >= maxQuestion){
        localStorage.setItem('mostRecentScore', score);
         window.location.assign('./end.html');
    };

    
    questionCounter++;
    questionCounterText.textContent = questionCounter + "/" + maxQuestion;


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.textContent = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.textContent = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    accpetingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!accpetingAnswers) return;

        accpetingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];


        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        console.log(classToApply);

        if(classToApply === 'correct') {
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);

            getNewQuestion();
        }, 1000);
    
    });


});

incrementScore = num => {
    score +=num;
    scoreText.textContent = score;
}

startGame = () => {

    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    clock();
};


// Starts the game
startGame();


saveHighScore = (e) => {
    console.log("clicked");
};