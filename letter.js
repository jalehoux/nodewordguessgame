var Letter = function(letter, guessed){
    this.letter = letter;
    this.guess = guessed;
    this.checkLetter = function(){
        if(this.guess === true){
            return this.letter;
        } else {
            return "_";
        }
    };
    this.makeGuess = function(guessedLetter){
        if(guessedLetter === this.letter){
            return this.letter;
        }
    };
}