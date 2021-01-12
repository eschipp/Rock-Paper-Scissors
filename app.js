<script>

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

  playerSelection = window.prompt('Rock, Paper, or Scissors?');
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();

  function computerPlay(){
  let options = ['rock', 'paper', 'scissors']
  return options[Math.floor(Math.random() * options.length)]
  }

  console.log(`Player chose ${playerSelection}`);
  console.log(`Computer chose ${computerSelection}`);

  if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection == 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')){
    console.log(`--No Points Awarded--`);
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')){
    console.log(`--One Point Awarded To Player--`);
    return playerScore +=1;
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')){
     console.log(`--One Point Awarded To Computer--`);
    return computerScore += 1;
  }
}

//playing a five round game that keeps score and reports a winner or loser at the end

//use previous function inside game() to loop five times

function game() {
    for (let i = 1; i < 6; i += 1) {
      console.log(`Round ${i}`);
      playRound();
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
      if (playerSelection === 'rock' && computerSelection === 'rock'){
        console.log('--No Points Awarded--');
        } else if (playerSelection === 'paper' && computerSelection === 'paper'){
          console.log('--No Points Awarded--');
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
          console.log('--No Points Awarded--');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
          console.log('--One Point Awarded To Player--');
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
          console.log('--One Point Awarded To Player--');
        } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
          console.log('--One Point Awarded To Player--');
        } else if (playerSelection === 'rock' && computerSelection === 'paper'){
          console.log('--One Point Awarded To Computer--');
        } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
          console.log('--One Point Awarded To Computer--');
        } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
          console.log('--One Point Awarded To Computer--');
        }
      }
    console.log('RESULTS:')
    console.log(`Computer Score: ${computerScore} // Player Score: ${playerScore}`)
    if (computerScore > playerScore) {
  console.log(`Boo hoo! The Computer beat you.`);
  } else if (computerScore < playerScore) {
  console.log(`Congratulations! You beat the computer.`);
  } else {
    console.log('What?! You tied!');
  }
}

game();
</script>
