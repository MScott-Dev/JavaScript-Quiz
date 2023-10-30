const highScoreList = document.getElementById('highScoreList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// highScoreList.textContent = highScores
//     .map(score => {
//         return `<li class="high-score">${score.name} - ${score.score}</li>`;
//         })
//         .join("");

highScoreList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");