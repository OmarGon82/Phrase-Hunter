
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
        hearts[this.missed].src = "images/lostHeart.png";
        this.missed += 1;
        if(this.missed === 5) {
            this.gameOver(false)
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay")
        const h1 = document.getElementById("game-over-message")
        overlay.style.display = "block";
    if(gameWon) {
        overlay.classList.remove("start")
        overlay.classList.add("win");
        h1.innerHTML = "Your skills were no match for this challange. You win!";
        // document.body.style.background = "url('../GOPR4968.JPG')";
    }
    if(this.missed === 5 ){
        overlay.classList.remove("start")
        overlay.classList.add("lose");
        h1.innerHTML = "Sharpen your hunting skills and try again!"
        }
    };


    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const letter = button.textContent;

        if(this.activePhrase.checkLetter(letter)) {
            button.disabled = true;
            button.style.border = '2px solid green';
            button.style.background = "lightgreen"
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin()
        
        } else {
            button.style.border = '2px solid firebrick';
            button.disabled = true;
            button.classList.add("wrong");
            this.removeLife()

        }

        if(this.checkForWin()) {
        this.gameOver(true)
        } 
    
    };

    /** 
     * Resets keyboard. Removes 'chosen' or 'wrong' class.
     * enables all buttons
     */
    resetKeyboard() {
       const keys = document.getElementsByClassName("key");
       for(let i = 0; i < keys.length; i++) {
           keys[i].classList.remove("wrong", "chosen");
           keys[i].disabled = false;
           keys[i].style.background = "";
           keys[i].style.border = "";
       }
    }

    /**
     * removes the win or lose overlay
     */
    resetOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("win", "lose");
    overlay.classList.add("start");
    document.querySelector("h1").innerHTML = "";
    }
    /**
     * Resets the hearts back to 5.
     */
    resetLife() {
        const hearts = document.querySelectorAll('img');
        hearts.forEach(heart => {
            heart.src = "images/liveHeart.png"
        })
    };
}

