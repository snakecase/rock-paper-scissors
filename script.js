const computerPlay = function() {
  const randomNumber = Math.random();
  return randomNumber <= 0.33
    ? `rock`
    : randomNumber > 0.66 ? `paper` : `scissors`;
};

const playRound = function(computerPlay, userPlay) {
  if (userPlay === `canceled`) {
    return `canceled`;
  } else if (computerPlay === userPlay) {
    return `draw`;

    // Check Rock versus ...
  } else if (computerPlay === `rock`) {
    return userPlay === `scissors` ? `computer` : `user`;

    // Check Paper versus ...
  } else if (computerPlay === `paper`) {
    return userPlay === `rock` ? `computer` : `user`;

    // Check Scissors versus ...
  } else {
    return userPlay === `paper` ? `computer` : `user`;
  }
};

let computerScore = 0;
let userScore = 0;

// Invoke playRound each button press then display results in html
const game = function(e) {
  // If the paragraph displaying the winner exists then stop the game
  if (document.querySelector(`.displayResult`)) {
    return;
  }

  // Pass pressed button's class as userPlay
  const roundResult = playRound(computerPlay(), e.target.className);

  const computerDisplayScore = document.querySelector(`.computer-result-p`);
  const userDisplayScore = document.querySelector(`.user-result-p`);

  // Increment scores and update them in html
  if (roundResult === `computer`) {
    computerScore++;
    computerDisplayScore.textContent = `Computer: ${computerScore}`;
  } else if (roundResult === `user`) {
    userScore++;
    userDisplayScore.textContent = `Player: ${userScore}`;
  }

  // Append a paragraph to the results block in case any player reaches max score
  if (computerScore === 5 || userScore === 5) {
    const divResult = document.querySelector(`.results-div`);
    const displayResult = document.createElement(`p`);
    displayResult.className = `displayResult`;
    divResult.appendChild(displayResult);

    // Declare a winner
    if (computerScore === 5) {
      displayResult.textContent = `Computer won!`;
    } else if (userScore === 5) {
      displayResult.textContent = `The winner is you! Congratulations!`;
    }
  }
};

const btns = document.querySelectorAll(`button`);
btns.forEach(button => button.addEventListener(`click`, game));
