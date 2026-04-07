let isGame = false;
const flags = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua_and_Barbuda",
  "Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
  "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia_and_Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina_Faso",
  "Burundi","Cabo_Verde","Cambodia","Cameroon","Canada",
  "Central_African_Republic","Chad","Chile","China","Colombia","Comoros",
  "Congo_Brazzaville","Congo_Kinshasa","Costa_Rica","Croatia","Cuba","Cyprus",
  "Czechia","Denmark","Djibouti","Dominica","Dominican_Republic","Ecuador","Egypt",
  "El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
  "Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
  "Grenada","Guatemala","Guinea","Guinea_Bissau","Guyana","Haiti","Honduras",
  "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
  "Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
  "Marshall_Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova",
  "Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New_Zealand","Nicaragua","Niger","Nigeria",
  "North_Korea","North_Macedonia","Norway","Oman","Pakistan","Palau",
  "Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Rwanda","Saint_Kitts_and_Nevis","Saint_Lucia",
  "Saint_Vincent_and_the_Grenadines","Samoa","San_Marino",
  "Sao_Tome_and_Principe","Saudi_Arabia","Senegal","Serbia","Seychelles",
  "Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia",
  "South_Africa","South_Korea","South_Sudan","Spain","Sri_Lanka","Sudan",
  "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
  "Thailand","Timor_Leste","Togo","Tonga","Trinidad_and_Tobago","Tunisia",
  "Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United_Arab_Emirates",
  "United_Kingdom","United_States","Uruguay","Uzbekistan","Vanuatu",
  "Vatican_City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];
let score = 0;
let selectedFlags = [];
let correctFlag = "";
let timer;
let timeLeft = 60;
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
  if (isGame) {
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
  if (isGame) {
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
  if (isGame) {
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
  if (isGame) {
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
    score = 0;
    timeLeft = 60;

    game();
    document.getElementById("score").innerText = "score: " + score;

    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").innerText = "Time: " + timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("flag1").src = "./img/placeholder.png";
        document.getElementById("flag2").src = "./img/placeholder.png";
        document.getElementById("flag3").src = "./img/placeholder.png";
        document.getElementById("flag4").src = "./img/placeholder.png";
        isGame = false;
        alert("Time's up! Score: " + score);
      }
    }, 1000);
  }
};

function choise4flages() {
  let shuffled = [...flags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
};
