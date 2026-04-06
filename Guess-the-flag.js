let isGame = false;
const flags = [
  "United_States",
  "China",
  "Russia",
  "India",
  "United_Kingdom",
  "France",
  "Germany",
  "Japan",
  "Brazil",
  "Italy",
];
let score = 0;
let selectedFlags = [];
let correctFlag = "";
function game() {
  selectedFlags = choise4flages();

  document.getElementById("flag1").src = `./img/${selectedFlags[0]}.png`;
  document.getElementById("flag2").src = `./img/${selectedFlags[1]}.png`;
  document.getElementById("flag3").src = `./img/${selectedFlags[2]}.png`;
  document.getElementById("flag4").src = `./img/${selectedFlags[3]}.png`;

  const correctIndex = Math.floor(Math.random() * 4);
  correctFlag = selectedFlags[correctIndex];

  document.getElementById("q").innerText =
    `Where is the flag of ${correctFlag.replace("_", " ")}?`;

  document.getElementById("score").innerText = "score: " + score;
}


document.getElementById("flag1Btn").onclick = function () {
  if(isGame){
    if (selectedFlags[0] === correctFlag) {
    score++;
    document.getElementById("score").innerText = "score: " + score;
    game();
  } else {
    score--;
    document.getElementById("score").innerText = "score: " + score;
  }
  }
};

document.getElementById("flag2Btn").onclick = function () {
  if(isGame){
    if (selectedFlags[1] === correctFlag) {
    score++;
    document.getElementById("score").innerText = "score: " + score;
    game();
  } else {
    score--;
    document.getElementById("score").innerText = "score: " + score;
  }
  }
};

document.getElementById("flag3Btn").onclick = function () {
  if(isGame){
    if (selectedFlags[2] === correctFlag) {
    score++;
    document.getElementById("score").innerText = "score: " + score;
    game();
  } else {
    score--;
    document.getElementById("score").innerText = "score: " + score;
  }
  }
};

document.getElementById("flag4Btn").onclick = function () {
  if(isGame){
    if (selectedFlags[3] === correctFlag) {
    score++;
    document.getElementById("score").innerText = "score: " + score;
    game();
  } else {
    score--;
    document.getElementById("score").innerText = "score: " + score;
  }
  }
};

document.getElementById("startBtn").onclick = function () {
  if (!isGame) {
    isGame = true;
    game();
    document.getElementById("score").innerText = "score: " + score;
  }
};

function choise4flages() {
  let shuffled = [...flags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}
