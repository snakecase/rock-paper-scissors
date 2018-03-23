    const computerPlay = function () {
        const randomNumber = Math.random();

        return (randomNumber <= 0.33) ? `rock` :
            (randomNumber > 0.66) ? `paper` : `scissors`;
    }

    const userPlay = function () {
        let userInput = prompt(`Pick a hand:`);

        // In case user presses Cancel or ESC key
        if (userInput === null) {
            return `canceled`;
        }

        userInput = userInput.toLowerCase();
        const hands = [`rock`, `paper`, `scissors`];

        if (hands.indexOf(userInput) > -1) {
            return userInput;
        } else {
            // Prompt accepts only legit hand names, otherwise keeps prompting
            alert(`Please input a correct hand ("Rock", "Paper" or "Scissors")`);
            return userPlay();
        }
    }

    const playRound = function (computerPlay, userPlay) {
        if (userPlay === `canceled`) {
            return `canceled`;
        } else if (computerPlay === userPlay) {
            return `draw`;
        }
        // Check Rock versus ...
        else if (computerPlay === `rock`) {
            return (userPlay === `scissors`) ? `computer` : `user`;
        }
        // Check Paper versus ...
        else if (computerPlay === `paper`) {
            return (userPlay === `rock`) ? `computer` : `user`;
        }
        // Check Scissors versus ...
        else {
            return (userPlay === `paper`) ? `computer` : `user`;
        }
    }

    // Iterates playRound() function ${num} of times,
    // scores each iteration and returns the winner of the game with final scores
    const game = function (num) {
        let computerScore = 0;
        let userScore = 0;

        for (i = 1; i <= num; i++) {
            const roundResult = playRound(computerPlay(), userPlay());
            console.log(`Round ${i}: ${roundResult}`);
            if (roundResult === `computer`) {
                computerScore++;
            } else if (roundResult === `user`) {
                userScore++;
            }
        }

        if (computerScore === userScore) {
            console.log(`Draw!`);
            return `draw`;
        } else if (computerScore > userScore) {
            console.log(`Computer won with the score of ${computerScore} against ${userScore}!`);
            return `computer`;
        } else {
            console.log(`You won with the score of ${userScore} against ${computerScore}! Congratulations!`);
            return `user`;
        }
    }