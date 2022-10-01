// set global variables
let wins = 0;
let losses = 0;
let ties = 0;

// make a player function

function playerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log("player chose: " + choice);
    return choice;
}

// make a computer object

function computerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// find winner

function findWinner(player, computer) {

    switch(player) {
        case "rock":

            switch(computer) {
                case "rock":
                    ties++;
                    return("tie!");
                case "paper":
                    losses++;
                    return("you lose!");
                case "scissors":
                    wins++;
                    return("you win!");
            }

        case "paper":
            
            switch(computer) {
                case "rock":
                    wins++;
                    return("you win!");
                case "paper":
                    ties++;
                    return("tie!");
                case "scissors":
                    losses++;
                    return("you lose!");
            }

        case "scissors":
            
            switch(computer) {
                case "rock":
                    losses++;
                    return("you lose!");
                case "paper":
                    wins++;
                    return("you win!");
                case "scissors":
                    ties++;
                    return("tie!");
            }

    }

}

// play one round

function playRound() {
    console.log(findWinner(playerChoice(), computerChoice()));

}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("ties: " + ties);

    if (wins > losses) {
        console.log("you win");
    } else if (losses > wins) {
        console.log("you lose");
    } else {
        console.log("you tie!");
    }
}

game();
