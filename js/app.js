
let game;

document.getElementById("btn__reset").addEventListener('click', function() {
    game = new Game();
    game.startGame();
})

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
    console.log(button);
    };