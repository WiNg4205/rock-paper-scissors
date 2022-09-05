const choice = ["rock", "scissors", "paper"];

// for displaying message
const capsChoice = ["Rock", "Scissors", "Paper"];

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function getPlayerChoice() {
    const input = prompt("Please enter your choice: ");
    const lower = input.toLowerCase();
    var player;
    if (lower === choice[0]) player = 0;
    else if (lower === choice[1]) player = 1;
    else if (lower === choice[2]) player = 2;
    else player = -10;
    return player;
}

function winner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return -1; // tie
    else if (playerSelection === computerSelection - 1 || 
        playerSelection === computerSelection + 2) return playerSelection; // player wins
    else return computerSelection; // computer wins
}

function message(result, player, comp) {
    if (result === player) return "You Win! " + capsChoice[player] + " beats " + capsChoice[comp];
    else if (result === comp) return "You Lose! " + capsChoice[comp] + " beats " + capsChoice[player];
    else return "It was a tie!";
}

function game() {
    var tally = [0, 0, 0];
    for (let i = 0; i < 5; i++) {
        const player = getPlayerChoice();
        if (player === -10) {
            i = i - 1;
            console.log("Invalid input");
            continue;
        }
        const comp = getComputerChoice();
        result = winner(player, comp);
        if (result === player) tally[0]++;
        else if (result === comp) tally[2]++;
        else tally[1]++;
        console.log(message(result, player, comp));        
    }
    return tally;
}

function score(tally) {
    if (tally[0] > tally[2]) return "You win!";
    else if (tally[0] < tally[2]) return "You lose!"; 
    else return "Tie!"
}

tally = game();
console.log(score(tally));


