
 
 
 function getComputerChoice() {
let number= Math.random();
if (number<=0.33) {
    return("rock");
}
else if (number<=0.66) {
    return ("paper");
}
else {
    return ("scissors");
}
 
}

 function getHumanchoice() {
    let choice= prompt("type rock paper or scissors");
    return choice;

    
 }
 function playGame() {
     let humanScore=0;
 let computerScore=0;
    for(let i=1; i<=5; i++){
 let humanChoice= getHumanchoice();
 let computerChoice=getComputerChoice();
 playRound(humanChoice,computerChoice);
 console.log("Score: You " + humanScore + " x " + computerScore + " Computer");
 
    }
    if(humanScore>computerScore) {
    console.log("You won the game");
 }
 else if(computerChoice>humanChoice) {
    console.log("Computer won the game");
 }
 else {
    console.log("that's a draw");
 }
 function playRound(humanChoice,computerChoice) {
    humanChoice=humanChoice.toLowerCase()
if (humanChoice===computerChoice) {
    console.log("that's a draw");
}
    else if (humanChoice==="rock" && computerChoice==="scissors"||humanChoice==="paper"&&computerChoice==="rock"||humanChoice==="scissors" && computerChoice==="paper") {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
humanScore++;

    }
    else {
       console.log("You lost! " + computerChoice + " beats " + humanChoice);
computerScore++;

    }

    }
} 

  playGame()
    
        
    
    
    


 
 
  
