/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * Game class
 * @constructor missed - used to track the number of missed guesses by the player.
 * @constructor phrases - an array of five Phrase objects to use with the game. 
 * @constructor activePhrase - his is the Phrase object that’s currently in play. 
 */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('you are cute'),
                        new Phrase('mind flow'),
                        new Phrase('The Waste Land'),
                        new Phrase('Javascript is Fun'),
                        new Phrase('laughing out loud')];
        this.activePhrase = null;
    }

    /**
     * This will hide the start screen overlay and set the activePhrase 
     * property to a randomly selected phrase to display
     */
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * This method randomly retrieves one of the phrases stored in 
     * the phrases array and returns it.
     * @returns Phrase Object
     */
    getRandomPhrase(){
        let randomNumber = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomNumber];
    }

    /**
     * This method removes a life from the scoreboard, by replacing one 
     * of the liveHeart.png images with a lostHeart.png image and 
     * increments the missed property.
     */
    removeLife(){
        this.missed += 1;
        const img = document.querySelectorAll('.tries img');
        for(let i = 0; i < this.missed; i++){
            img[i].src="images/lostHeart.png";
        }
        if (this.missed === 5){
            this.gameOver();
        }
    }

    /**
     *It checks to see if the button clicked by the player matches 
     * a letter in the phrase, and then directs the game based on a 
     * correct or incorrect guess. 
     * @param {HTMLElement} keyboard 
     */
    handleInteraction(keyboard){
        keyboard.disabled = true;
            if (!this.activePhrase.checkLetter(keyboard.textContent)){
                keyboard.classList.add("wrong");
                this.removeLife();
            } else {
                keyboard.classList.add("chosen");
                this.activePhrase.showMatchedLetter(keyboard.textContent);
                if (this.checkForWin()){
                    this.gameOver();
                }
            }
    }

    /**
     * this method checks to see if the player has revealed all of
     *  the letters in the active phrase.
     * @returns {boolean} true or false
     */
    checkForWin(){
        const hiddenPh = document.querySelectorAll('#phrase .hide');
        return hiddenPh.length === 0;
    }

    /**
     * this method displays the original start screen overlay, and
     *  depending on the outcome of the game, updates the overlay 
     * h1 element with a friendly win or loss message. Finally it will
     * reset the game to origin. 
     */
    gameOver(){
        document.getElementById('overlay').style.display = 'inherit';
        const overlay = document.getElementById('overlay');
        if (this.checkForWin()){
            document.getElementById('game-over-message').innerHTML = 'You Win! :D';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else {
            document.getElementById('game-over-message').innerHTML = 'You Lost. QAQ';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }
        this.gameReset();
    }
    /**
     * This will reset the game after the game is completed
     */
    gameReset(){
        document.querySelector('#phrase ul').innerHTML = ``;
        const keyboard = document.querySelectorAll('.key');
        for(let key of keyboard){
            key.disabled = false;
            key.className = "key";
        }
        this.missed = 0;
        const img = document.querySelectorAll('.tries img');
        for(let i = 0; i < img.length; i++){
            img[i].src="images/liveHeart.png";
        }
    }

    /**
     * This will generate a random number ranging from 0-256
     * @returns {number}
     */
    randomNumber(){
        return Math.floor(Math.random()*256);
    }
    /**
     * This will change the background color to a random color
     */
    randomColor(){
        let randomCol = `rgb(${this.randomNumber()}, ${this.randomNumber()}, ${this.randomNumber()})`;
        document.body.style.background = randomCol;
    }
}