/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
/**
 * Phrase class
 * @constructor phrase-the actual phrase the Phrase object is representing. 
 */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
     * This converts the phrase to the letter list that will be displayed 
     * to the empty box. 
     */
    addPhraseToDisplay(){
        const phraseUl = document.querySelector('#phrase ul');
        let phraseLetter = this.phrase.split('');
        let letterLi=``;
        for (let letter of phraseLetter){
            if(letter === ' '){
                letterLi += `<li class="space"> </li>`;
            } else {
                letterLi += `<li class="hide letter ${letter}">${letter}</li>`
            }
        }
        phraseUl.insertAdjacentHTML('beforeend', letterLi);
    }
    /**
     * This will check if the letter selected by the player matches
     *  a letter in the phrase 
     * @param {string} letter - the letter selected by player
     * @returns {Boolean} true or false
     */
    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    /**
     * This will reveals the letter(s) on the board that matches
     *  the player's selection.
     * @param {String} letter 
     */
    showMatchedLetter(letter){
        const listDom = document.querySelectorAll('#phrase li');
        for (let list of listDom){
            if(list.textContent === letter){
                list.classList.remove('hide');
                list.classList.add('show');
            }
        }
    }
}