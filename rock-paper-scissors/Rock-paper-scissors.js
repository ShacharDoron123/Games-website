let options = ["rock", "paper", "scissors"];
let score = 0;

document.getElementById("output").textContent = "מחכה שתבחרר";
document.getElementById("score").textContent = "ניקוד: "+score;

//rock
document.getElementById("rock").onclick = function(){
    let user = "rock"
    let choice = options[Math.floor(Math.random() * 3)];

    if(choice === "scissors"){
        //win for the user
        score++;
        document.getElementById("output").textContent = "ניצחת!!! בחרתי מספריים, ואבן מנצחת מספריים";
        document.getElementById("score").textContent = "ניקוד: "+score;
        return;
    } else if(choice === "paper"){
        //win for the pc
        score--;
        document.getElementById("output").textContent = "ניצחתי!!! בחרתי נייר, ונייר מנצח אבן";
        document.getElementById("score").textContent = "ניקוד: "+score;
        return;
    } else if(choice === "rock"){
        //same
        document.getElementById("output").textContent = "בחרנו אותו הדבר";
        return;
    }
}

//paper
document.getElementById("paper").onclick = function(){
    let user = "paper"
    let choice = options[Math.floor(Math.random() * 3)];

    if(choice === "scissors"){
        //win for the pc
        score--;
        document.getElementById("output").textContent = "ניצחתי!!! בחרתי מספריים, ומספריים מנצחות נייר";
        document.getElementById("score").textContent = "ניקוד: "+score;
        return;
    } else if(choice === "paper"){
        //same
        document.getElementById("output").textContent = "בחרנו אותו הדבר";
        return;
    } else if(choice === "rock"){
        //win for the user 
        score++;
        document.getElementById("output").textContent = "ניצחת!!! בחרתי אבן, ונייר מנצח אבן";
        document.getElementById("score").textContent = "ניקוד: "+score;
        return;
    }
}

//scissors
document.getElementById("scissors").onclick = function(){
    let user = "scissors"
    let choice = options[Math.floor(Math.random() * 3)];

    if(choice === "scissors"){
        //same
        document.getElementById("output").textContent = "בחרנו אותו הדבר";
        return;
    } else if(choice === "paper"){
        //win for the user
        score++;
        document.getElementById("output").textContent = "ניצחת!!! בחרתי נייר ומספריים מנצחות נייר";
        document.getElementById("score").textContent = "ניקוד: "+score;
        return;
    } else if(choice === "rock"){
        //win for the pc
        score--;
        document.getElementById("output").textContent = "ניצחתי!!! בחרתי אבן, אבן מנצחת מספריים";
        document.getElementById("score").textContent = "ניקוד: "+score;
        return;
    }
}

//Restart btn

document.getElementById("Restart").onclick = function(){
    score = 0;
    document.getElementById("output").textContent = "מחכה שתבחרר";
    document.getElementById("score").textContent = "ניקוד: "+score;
}