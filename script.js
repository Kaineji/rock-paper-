const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const Result = document.getElementById("Result");
const lose = document.getElementById("lose");
const win = document.getElementById("win");
const tie = document.getElementById("tie");
const player = document.getElementById("player");
const computer = document.getElementById("computer");

const choices = ['rock', 'paper', 'scissors'];

let PlayerScore = 0;
let ComputerScore = 0;

window.alert(`Credits:

I would like to extend my heartfelt gratitude to Yma Kris Ancheta for her exceptional artwork, which has greatly enhanced the visual experience of my mini-games. Her creativity and talent have been instrumental in bringing our games to life. Thank you, Yma Kris Ancheta, for your invaluable contribution.
function PlayGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);
    console.log(playerChoice);

    let result = "";

    if(playerChoice === computerChoice) {

        tie.style.display = "block";
        win.style.display = "none";
        lose.style.display = "none";
        result = "Oops a Tie"

    }

    else {


        if(playerChoice === "rock") {

            //scissors
           if (computerChoice ===  "scissors") {

            win.style.display = "block";
            lose.style.display = "none";
            tie.style.display = "none";
            result = "You win!"
            PlayerScore++;

           }

           else {

            lose.style.display = "block";
            win.style.display = "none";
            tie.style.display = "none";
            result = "HAHAHA!"
            ComputerScore++;

           }


        }

        else if (playerChoice === "paper") {

            //rock
            if (computerChoice ===  "scissors") {

                win.style.display = "block";
                lose.style.display = "none";
                tie.style.display = "none";
                result = "You win!"
                PlayerScore++;

               }
    
               else {
    
                lose.style.display = "block";
                win.style.display = "none";
                tie.style.display = "none";
                result = "HAHAHA!"
                ComputerScore++;
    
               }

        }
        
        else if (playerChoice === "scissors") {

            //paper
            if (computerChoice ===  "scissors") {

                win.style.display = "block";
                lose.style.display = "none";
                tie.style.display = "none";
                result = "You win!"
                PlayerScore++;
    
               }
    
               else {
    
                lose.style.display = "block";
                win.style.display = "none";
                tie.style.display = "none";
                result = "HAHAHA!"
                ComputerScore++;
    
               }

        }

}

PlayerDisplay.textContent = `Player: ${playerChoice}`;
ComputerDisplay.textContent = `Computer: ${computerChoice}`;

    Result.textContent = result;
    player.textContent = `Player: ${PlayerScore}`;
    computer.textContent = `Ai: ${ComputerScore}`;

    if(PlayerScore == 10) {

        window.alert(`Congratulations!`);
        player.textContent = ``;
        computer.textContent = ``;
        PlayerScore = 0;
        ComputerScore = 0;

    }

    else if(ComputerScore == 10) {

        window.alert(`Better luck next time!`);
        player.textContent = ``;
        computer.textContent = ``;
        PlayerScore = 0;
        ComputerScore = 0;

    }

}

