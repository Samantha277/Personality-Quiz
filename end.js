const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const ttest = localStorage.getItem('t');
const sorted = localStorage.getItem('sorted');


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;
console.log(highScores);
console.log("Test value: ", ttest);
var st = "";
for (const property in sorted) {
    // console.log(`${property}: ${object[property]}`);
    //console.log(sorted[property]);
}
st += sorted[2];
st += sorted[6];
st += sorted[10];
st += sorted[14];
console.log("St value: ", st.toUpperCase());

console.log("Final score: ", mostRecentScore)

finalScore.innerText = st.toUpperCase();

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        // score: Math.floor(Math.random() * 100),
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/")
};