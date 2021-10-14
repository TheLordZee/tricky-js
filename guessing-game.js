function guessingGame() {
    let num = Math.floor(Math.random() * 100)
    let won = false;
    let count = 0;
    return function (guess){
        if(guess === num && !won){
            won = true;
            count++;
            return `You win! You found ${num} in ${count} guesses.`
        } else if(won){
            return "The game is over, you already won!"
        } else if(guess > num){
            count++;
            return `${guess} is too high!`
        } else if(guess < num){
            count++;
            return `${guess} is too low!`
        }
    }
}

module.exports = { guessingGame };
