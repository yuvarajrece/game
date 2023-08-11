//Paper, Rock , Scissors Game

let player = confirm("Shall we play Paper, Rock , Scissors Game?");
if(player){
    let playerChoice = prompt("Enter your Choice Paper, Rock or Scissors?");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne==="rock"||playerOne==="paper"||playerOne==="scissors"){
            
            let computerChoice = (Math.floor(Math.random())*3+1);

            let computer = computerChoice === 1 ?"rock":
            computerChoice === 2 ?"paper":
            "scissors";

            let result = playerOne===computer? `playerOne: ${playerOne}\ncomputer: ${computer}\n"Tie Game"`:
            playerOne==="paper" && computer == "scissors" ? `playerOne: ${playerOne}\ncomputer: ${computer}\n"Computer Win's Game"`:
            
            playerOne==="rock" && computer == "scissors" ? `playerOne: ${playerOne}\ncomputer: ${computer}\n"Computer Win's Game"`:
            
            playerOne==="rock" && computer == "paper" ? `playerOne: ${playerOne}\ncomputer: ${computer}\n"Computer Win's Game"`:
           
            `playerOne: ${playerOne}\ncomputer: ${computer}\n"Player Win's Game`;


           alert(result);

           let playAgain = confirm("Play Again");

           playAgain ? location.reload() : alert("ok, Thank you!!!");
       
    }
   
    }
 
        else {
            alert("You didn't enter rock, paper, or scissors.");
          }

}
else{
    alert("Kindly Come Again for the Game!!!");
}
