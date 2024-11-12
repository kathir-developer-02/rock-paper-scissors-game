let popupLayer = document.getElementById("popup-layer");
let popupStart = document.getElementById("popup-start");

function start(){
  popupLayer.style.display = "none";
  popupStart.style.display = "none";
}

const score ={
  wins: 0,
  losses: 0,
  ties: 0 
};

let uScore = document.getElementById('user-score');
let cScore = document.getElementById('com-score');
let resetScore = document.getElementById('score-js');


function playGame(playerMove){
  const computerMove = playcomputerMove();

  let result = '';

  if(playerMove === "rock"){
    if(computerMove === "rock"){
      result = "You Tie";
    }else if(computerMove === "paper"){
      result = "You Lose";
    }else if(computerMove === "scissors"){
      result = "You Win";
    }
  }

  if(playerMove === "paper"){
    if(computerMove === "rock"){
      result = "You Win";
    }else if(computerMove === "paper"){
      result = "You Tie";
    }else if(computerMove === "scissors"){
      result = "You Lose";
    }
  }

  if(playerMove === "scissors"){
    if(computerMove === "rock"){
      result = "You Lose";
    }else if(computerMove === "paper"){
      result = "You Win";
    }else if(computerMove === "scissors"){
      result = "You Tie";
    }
  }

  console.log(result);

  if(result === "You Win"){
    score.wins += 1; 
  }else if(result === "You Tie"){
    score.ties += 1;
  }else if(result === "You Lose"){
    score.losses += 1;
  }

  if(score.wins === 10){
    popupBox.style.display = "block";
    popupOverlay.style.display = "block";
    finalResult.textContent = `Score is ${score.wins}. You Won The Match!`;
    
  }else if(score.losses === 10){
    popupBox.style.display = "block";
    popupOverlay.style.display = "block";
    finalResult.textContent = "You Loss The Match!."
  }

  updateScore();

  // console.log(`Wins : ${score.wins}. Ties : ${score.ties}. Losses : ${score.losses}.`);
  let displayScore1 = document.getElementById('your-move');
  let displayScore2 = document.getElementById('com-move');
  let displayScore3 = document.getElementById('result');


  displayScore1.innerHTML = `YourMove is <img class="move-icon" src="img/${playerMove}-emoji.png">`;
  displayScore2.innerHTML = `ComputerMove is <img class="move-icon" src="img/${computerMove}-emoji.png">`;
  displayScore3.innerHTML = `${result}.`;

}

function playcomputerMove(){
  let computerMove = '';
  const randomNum = Math.random();

  if(randomNum >=0 && randomNum < 1/3){
    computerMove = "rock";
  }else if(randomNum >=1/3 && randomNum < 2/3){
    computerMove = "paper";
  }else if(randomNum >=2/3 && randomNum <=1){
    computerMove= "scissors"
  }

  console.log(computerMove);
  return computerMove;
}

let popupBox = document.getElementById("popup-box");
let popupOverlay = document.getElementById("popup-lay");

let finalResult = document.getElementById("final-result");

function updateScore(){
  resetScore.innerHTML = `Wins : ${score.wins} Ties : ${score.ties} Losses : ${score.losses}`;

  uScore.innerText = `${score.wins}`;
  cScore.innerText = `${score.losses}`;

}

function reset(){
  score.wins = 0
  score.losses = 0
  score.ties = 0

  localStorage.removeItem('score');

  updateScore();
}

function playAgain(){
  popupBox.style.display = "none";
  popupOverlay.style.display = "none";
  reset();
}


