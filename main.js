// set global variables
let wins = 0;
let losses = 0;
let ties = 0;

// get querySelectors 

const score = document.querySelector("#score");
const displayWinner = document.querySelector("#displayWinner");
const body = document.querySelector("body");

// add event listener to buttons

const rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
    playRound("rock");
})

const paper = document.querySelector('#paper');

paper.addEventListener('click', () => {
    playRound("paper");
})

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', () => {
    playRound("scissors");
})

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

function playRound(choice) {

    let playerChoice = choice;

    displayWinner.textContent = findWinner(playerChoice, computerChoice());
    
    score.textContent = (wins + " - " + losses);

    // end the game if someone hits 5

    if (wins == 5) {
        body.style.backgroundColor = "green";
        body.style.color = "black";
        score.textContent = (wins + " - " + losses);
    
        rock.remove();
        paper.remove();
        scissors.remove();
    
    } 
    
    if (losses == 5) {
        body.style.backgroundColor = "red";
        body.style.color = "black";
        score.textContent = (wins + " - " + losses);
    
        rock.remove();
        paper.remove();
        scissors.remove();
    }

}
