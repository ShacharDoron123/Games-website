import { countries, vegetablesAndFruits } from "./words.js";

let index = 0; //courent stage of the game
let word; // the selected word pf the game
let category;
let guessedLetters = [];
let isGame = false;

function Game() {
  index = 0;
  guessedLetters = [];
  isGame = true;
  document.getElementById("word").textContent = "";
  category = document.getElementById("selectedCategory").value;
  word = selecteWord(category);
  display();
}

function selecteWord(category) {
  if (category == "countries") {
    let random = Math.floor(Math.random() * countries.length);
    word = countries[random];
  }
  if (category == "vegetablesAndFruits") {
    let random = Math.floor(Math.random() * vegetablesAndFruits.length);
    word = vegetablesAndFruits[random];
  }
  return word;
}

function check() {
  if (isGame) {
    let input = document.getElementById("input").value;
    let found = false;
    if (input.length == 1) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == input){
            guessedLetters[i] = true;
            found = true;
        }
      }
      if(!found)
        index++;
      display();
    } else if (input.length == word.length) {
      for (let i = 0; i < word.length; i++) {
        if (input[i] != word[i]) return;
      }
      isGame = false;
      document.getElementById("word").textContent =
        "you won, the word was " + word;
    }
  }
  if (index >= 7) {
    isGame = false;
    document.getElementById("word").textContent =
      "you lost! the word was " + word;
  }
  document.getElementById("input").value = "";
  return;
}

function display() {
  let temp = "";

  for (let i = 0; i < word.length; i++) {
    if (guessedLetters[i] == true) temp += " " + word[i];
    else if (word[i] === " ") temp += "  ";
    else temp += "_ ";
  }

  document.getElementById("word").textContent = temp;
}

window.Game = Game;
window.check = check;
