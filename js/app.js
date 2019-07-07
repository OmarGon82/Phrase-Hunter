
let game;

/**
 * Event listner for the start game button. To start a new game
 */
document.getElementById("btn__reset").addEventListener('click', function() {
    game = new Game();
    game.startGame(); 
})

/**
 * Event listner for the on screen keyboard.
 * It class the handleInteraction function.
 */
document.getElementById('qwerty').addEventListener('click', function(event) {
    const e = event.target;
    if(e.className === "key"){
       game.handleInteraction(e)
    };   
})
    
/**
 * Event listener for the start game button to reset the game
 * If the game is won or lost it will reset keyboard,overlay and lifes
 */   
document.getElementById("btn__reset").addEventListener('click', function() {
    if(overlay.className === "lose" || overlay.className === "win") {
        game.resetKeyboard();
        game.resetOverlay();
        game.resetLife();
    };
    
}) 

/**
 * Event listern for keyboard input.
 * Checks if the key pressed is a valid letter and then fires the click event for the virtual 
 * keyboard. 
 */

document.addEventListener('keydown', function(event){
    const keyPressed = event.key.toLowerCase();
    const validLetters = "abcdefghijklmnopqrstuvwxyz";
    const allKeys = document.getElementsByClassName("key");
    
    if(validLetters.includes(keyPressed)) {
        for(let key of allKeys) {
            if(key.innerText == keyPressed) {
                key.click();
            }
        }
    }   
    });






