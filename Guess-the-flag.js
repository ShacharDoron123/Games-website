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

function game() {
  let selectedFlags = choise4flages();

  document.getElementById("flag1").src = `./img/${selectedFlags[0]}.png`;
  document.getElementById("flag2").src = `./img/${selectedFlags[1]}.png`;
  document.getElementById("flag3").src = `./img/${selectedFlags[2]}.png`;
  document.getElementById("flag4").src = `./img/${selectedFlags[3]}.png`;

  const correctIndex = Math.floor(Math.random() * 4);
  const correctFlag = selectedFlags[correctIndex];

  document.getElementById("q").innerText =
    `Where is the flag of ${correctFlag.replace("_", " ")}?`;


  document.getElementById("flag1Btn").onclick = function () {
    if (selectedFlags[0] === correctFlag) game();
  };

  document.getElementById("flag2Btn").onclick = function () {
    if (selectedFlags[1] === correctFlag) game();
  };

  document.getElementById("flag3Btn").onclick = function () {
    if (selectedFlags[2] === correctFlag) game();
  };

  document.getElementById("flag4Btn").onclick = function () {
    if (selectedFlags[3] === correctFlag) game();
  };
}

document.getElementById("startBtn").onclick = function () {
  if (!isGame) {
    isGame = true;
    game();
  }
};

function choise4flages() {
  let shuffled = [...flags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}
