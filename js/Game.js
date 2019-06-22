/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.phrases;
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
        const randomNum = Math.floor(Math.random() * this.phrases.length )
        return this.phrases[randomNum];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */  
    startGame() {
        document.getElementById("overlay").style.display = "none";
        this.getRandomPhrase().addPhraseToDisplay();
    }

}
