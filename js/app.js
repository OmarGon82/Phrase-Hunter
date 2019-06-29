
let game;

document.getElementById("btn__reset").addEventListener('click', function() {
    game = new Game();
    game.startGame();
})

document.getElementById('qwerty').addEventListener('click', function(event) {
    const e = event.target;
    // console.log(e.classList)
 if(e.className === "key"){
    game.handleInteraction(e)
    } 
})
