
let game;

document.getElementById("btn__reset").addEventListener('click', function() {
    game = new Game();
    game.startGame();
})

document.getElementById('qwerty').addEventListener('click', function(event) {
    const e = event.target;
    
 if(e.className === "key"){
    game.handleInteraction(e)
    } 
})


document.getElementById("btn__reset").addEventListener('click', function() {
    // const overlay = document.getElementById("overlay");
    const ul = document.querySelector('ul');
    const lis = ul.children
    const keys = document.getElementsByClassName("key");
    
    if(overlay.className === "lose" || overlay.className === "win") {
        for(let i = 0; i < keys.length; i++) {
            keys[i].classList.remove("wrong", "chosen");
            keys[i].disabled = false;
        }
        // for(let i = 0; i < lis; i++) {
        //     ul[i].removeChild();
        // }
    }
}) 

