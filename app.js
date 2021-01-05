<script>
function computerPlay(){
  let options = ['rock', 'paper', 'scissors']
  return options[Math.floor(Math.random() * options.length)]
}
function playRound(playerSelection, computerSelection) {
  computerPlay();
  if(playerSelection === 'rock' && computerSelection === 'rock'){
    return 'You have tied! You both chose rock.'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    return 'You win! Rock beats scissors.'
  } else if (playerSelection === 'rock' && computerSelection === 'paper'){
    return 'You lose! Paper beats rock.'
  }
    
  if(playerSelection === 'paper' && computerSelection === 'rock'){
    return 'You win! Paper beats rock.'
  } else if(playerSelection === 'paper' && computerSelection === 'paper'){
    return 'You have tied! You both chose rock.'
  } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    return 'You lose! Scissors beats paper.'
  }
    
  if(playerSelection === 'scissors' && computerSelection === 'rock'){
    return 'You lose! Rock beats scissors.'
  } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    return 'You win! Scissors beats paper.'
  } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
    return 'You have tied! You both chose scissors.'
  }
}

playerSelection = 'rock';
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
</script>
