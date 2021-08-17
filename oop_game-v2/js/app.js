/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const startGameBtn = document.getElementById('btn__reset');

/**
 * This adds a click event listener to the "Start Game" button which 
 * creates a new Game object and starts the game.
 */
startGameBtn.addEventListener('click', e => {
    game.startGame();
    game.randomColor();
    document.getElementById('overlay').className = "start";
    document.getElementById('game-over-message').innerHTML = ``;
})

/**
 * Add click event listeners to each of the onscreen keyboard buttons,
 *  so that clicking a button calls the handleInteraction() method on 
 * the Game object.
 */
const keyboard = document.getElementById("qwerty");
keyboard.addEventListener('click', e => {
    if(e.target.className === 'key'){
        game.handleInteraction(e.target);
    }
})

/**
 * This enables players to use their physical computer keyboard to 
 * enter guesses. 
 */
const keys = document.querySelectorAll('.key');
document.addEventListener('keyup', e => {
    for(let i = 0; i < keys.length; i++){
        if(e.key === keys[i].textContent){
            if(keys[i].disabled === false && overlay.style.display === "none"){
                game.handleInteraction(keys[i]);
            }
        }
    }
})



