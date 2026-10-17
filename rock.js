let whoWon = document.querySelector('.results')
let computerMove = ''
let scores = document.querySelector('.score')
const score = { wins: 0, losses: 0, ties: 0 }


function pickComputerChoice() {
  const randomShit = Math.random()

  if (randomShit >= 0 && randomShit <= 1 / 3) {
    computerMove = "Rock"
  } else if (randomShit >= 1 / 3 && randomShit <= 2 / 3) {
    computerMove = "Paper"
  } else {
    computerMove = "Scissors"
  }

  return computerMove;
}

function playGame(playerMove) {
  pickComputerChoice()
  console.log(computerMove)

  let result = ''
  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'tie'
    } else if (computerMove === 'Paper') {
      result = 'lose'
    } else {
      result = 'win'
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'win'
    } else if (computerMove === 'Paper') {
      result = 'tie'
    } else {
      result = 'lose'
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'lose'
    } else if (computerMove === 'Paper') {
      result = 'win'
    } else {
      result = 'tie'
    }
  }

  if (result === 'win') {
    score.wins += 1
  } else if (result === 'lose') {
    score.losses += 1
  } else if (result === 'tie') {
    score.ties += 1
  }

  let final = `You picked ${playerMove}. Computer picked ${computerMove}. result is ${result}`

  let FinalScore = `You're score is, wins: ${score.wins}, losses: ${score.losses}, ties ${score.ties}`

  if (result === 'win') {
    whoWon.style.color = 'green'
  } else if (result === 'tie') {
    whoWon.style.color = "yellow"
  } else if (result === 'lose') {
    whoWon.style.color = 'red'
  }
  whoWon.textContent = final + '!!'
  scores.textContent = FinalScore
}

function ResetScore() {
  score.wins = 0
  score.losses = 0
  score.ties = 0

  scores.textContent = `You're score is, wins: ${score.wins}, losses: ${score.losses}, ties ${score.ties}`
  whoWon.textContent = 'Start Again!!'
  whoWon.style.color = 'green'
}