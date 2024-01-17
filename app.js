let userScore = 0;
let computerScore = 0;

const choices  = document.querySelectorAll(".img");
const status = document.querySelector("#status");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#computerScore");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame = ()=>{
    status.innerText =`Game Draw`;
    status.style.backgroundColor = "yellow";
}

const showWinner = (userWin, userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        status.innerText = `YOU WIN ! Your ${userChoice} beats ${compChoice}`;
        status.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        status.innerText = ` OOPS YOU LOST ! Your ${compChoice} beats ${userChoice}`;
        status.style.backgroundColor = "red";
         }
};

const playGame = (userChoice) =>{
    console.log("Image was Cliked", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer was Cliked", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice=== "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((img)=>{
    img.addEventListener("click",()=>{
        const userChoice = img.getAttribute("id");
        playGame(userChoice);
    });
    
}); 