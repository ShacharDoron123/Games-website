const img = [];
let result = [];
let numOfDice;

function rollDice(){
    numOfDice = document.getElementById("num").value;
    result = [];
    for(let i=0;i<numOfDice;i++){
        let temp = Math.floor(Math.random() * (6)) + 1;
        result.push(`<img src="../img/dice${temp}.png">`);
    };
    display();
    
};

function display(){
    document.getElementById("diceImages").innerHTML = "";
    for(let i=0;i<result.length;i++){
        document.getElementById("diceImages").innerHTML += result[i];
    }
    return;
};