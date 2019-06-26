
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */

    createPhrases() {
        let phrases = [
            new Phrase("Im going to make him an offer he cant refuse"),
            new Phrase("Go ahead make my day"),
            new Phrase("I love the smell of napalm in the morning"),
            new Phrase("Ill be back"),
            new Phrase("Hasta la vista baby")
        ];
        return phrases
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNum];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */  
    startGame() {
        document.getElementById("overlay").style.display = "none";
        const randomPhrase =  this.getRandomPhrase()
        randomPhrase.addPhraseToDisplay()
        this.activePhrase =  randomPhrase;
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
       const showLis = document.querySelectorAll('.show');
       const letterLis = document.querySelectorAll('.letter')
       if(showLis.length === letterLis.length) {
           return true;
       } else {
           return false;
       }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
    const hearts = document.querySelectorAll('img');
    
    if( this.missed > 5){
        for(let i = 0; i < hearts.length; i++){
           const heart = hearts[i]
            // hearts[i].src = "images/lostHeart.png"
            console.log(heart)
        }
    
    this.missed += 1
    }
    

    };


}
