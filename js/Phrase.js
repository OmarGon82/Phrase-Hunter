/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ul = document.getElementById("phrase");
        const li = document.createElement('li');
        ul.append(li);
        const splitPhrase = this.phrase.split("");

        splitPhrase.forEach( letter => {
            console.log(letter)
            if (letter === " ") {   
                li.classList.add("space");
            } else {
                li.style.display = "none"        
            }
            
        });

    }
}

