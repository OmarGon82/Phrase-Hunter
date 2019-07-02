
let game;

document.getElementById("btn__reset").addEventListener('click', function() {
    game = new Game();
    game.startGame();
})

document.getElementById('qwerty').addEventListener('click', function(event) {
    const e = event.target;
    
 if(e.className === "key"){
    game.handleInteraction(e)
    }; 
})


document.getElementById("btn__reset").addEventListener('click', function() {
    if(overlay.className === "lose" || overlay.className === "win") {
        game.resetKeyboard();
        game.resetOverlay();
        game.resetLife();
    };
}) 
    
    
        
    
    

