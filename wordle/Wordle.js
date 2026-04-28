import { words } from "./words.js";

let current = "";
let letters = current.split("");
let isPlay = false;
let index;

document.getElementById("start").onclick = function () {
  choice();
  isPlay = true;
  index = 1;
  document.getElementById("display-win").textContent = "";
};

function choice() {
  current = words[Math.floor(Math.random() * words.length)];
  letters = current.split("");
}

document.getElementById("send").onclick = function () {
  if (isPlay && index < 7) {
    let word = document.getElementById("word").value;
    word = word.toLowerCase();

    if (!word || word.length != 5) {
      window.alert("the word must be 5 letters long");
      return;
    }

    if (!words.includes(word)) {
      window.alert("this word isnt in the list of the words.");
      return;
    }

    document.getElementById("word").value = "";
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
      document.getElementById("display-win").textContent =
        "you win after " + index + " guess";
      document.getElementById("1." + index).style.backgroundColor = "green";
      document.getElementById("2." + index).style.backgroundColor = "green";
      document.getElementById("3." + index).style.backgroundColor = "green";
      document.getElementById("4." + index).style.backgroundColor = "green";
      document.getElementById("5." + index).style.backgroundColor = "green";
      isPlay = false;
      return;
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

  if (index == 7 && isPlay) {
    document.getElementById("display-win").textContent =
      "Game Over! The word was: " + current;

    isPlay = false;
    return;
  }
};
