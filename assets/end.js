const username = document.getElementById('username');
const saveButton = document.getElementById('saveButton');
const finalScore = document.getElementById('finalScore');

const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScores = 5;

finalScore.textContent = mostRecentScore;

username.addEventListener('keyup', () => {
    console.log(username.value);

    saveButton.disabled = !username.value;
});


saveHighScore = (e) => {
    e.preventDefault();
    
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort ( (a,b) => b.score - a.score )
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');

    console.log(highScores);
};