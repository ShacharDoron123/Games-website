import { words } from "./words.js";

let current = "";
let letters = current.split("");
let isPlay = false;
let index;
let chr1;
let chr2;
let chr3;
let chr4;
let chr5;

document.getElementById("start").onclick = function () {
  choice();
  isPlay = true;
  index = 1;
};

function choice() {
  current = words[Math.floor(Math.random() * words.length)];
  letters = current.split("");
  chr1 = letters[0];
  chr2 = letters[1];
  chr3 = letters[2];
  chr4 = letters[3];
  chr5 = letters[4];
}

document.getElementById("send").onclick = function () {
  if (isPlay) {
    let word = document.getElementById("word").value;
    
    if (word == null) return;
    if (!words.includes(word)) return;

    word = word.split("");
    let char1 = word[0];
    let char2 = word[1];
    let char3 = word[2];
    let char4 = word[3];
    let char5 = word[4];

    document.getElementById("1." + index).textContent = char1;
    document.getElementById("2." + index).textContent = char2;
    document.getElementById("3." + index).textContent = char3;
    document.getElementById("4." + index).textContent = char4;
    document.getElementById("5." + index).textContent = char5;

    if (
      char1 == letters[0] &&
      char2 == letters[1] &&
      char3 == letters[2] &&
      char4 == letters[3] &&
      char5 == letters[4]
    ) {
      document.getElementById("disply-win").textContent =
        "you win after " + index + " guess";
    }

    if (!letters.includes(char1))
      document.getElementById("1." + index).style.backgroundColor = "gray";
    else if (char1 != letters[0])
      document.getElementById("1." + index).style.backgroundColor = "yellow";
    else document.getElementById("1." + index).style.backgroundColor = "green";

    if (!letters.includes(char2))
      document.getElementById("2." + index).style.backgroundColor = "gray";
    else if (char2 != letters[1])
      document.getElementById("2." + index).style.backgroundColor = "yellow";
    else document.getElementById("2." + index).style.backgroundColor = "green";

    if (!letters.includes(char3))
      document.getElementById("3." + index).style.backgroundColor = "gray";
    else if (char3 != letters[2])
      document.getElementById("3." + index).style.backgroundColor = "yellow";
    else document.getElementById("3." + index).style.backgroundColor = "green";

    if (!letters.includes(char4))
      document.getElementById("4." + index).style.backgroundColor = "gray";
    else if (char4 != letters[3])
      document.getElementById("4." + index).style.backgroundColor = "yellow";
    else document.getElementById("4." + index).style.backgroundColor = "green";

    if (!letters.includes(char5))
      document.getElementById("5." + index).style.backgroundColor = "gray";
    else if (char5 != letters[4])
      document.getElementById("5." + index).style.backgroundColor = "yellow";
    else document.getElementById("5." + index).style.backgroundColor = "green";
    index++;
  }
};
