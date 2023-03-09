
import {container,hangman_lives,guessWordElement, playButton,reload ,LETTERS as letters} from "./constants.js";
import { getRandomWord } from "./api.js";

let guessWord = '';
let hiddenWord = '';
let lives = hangman_lives;



function generetionButton(letter){
    let btn = document.createElement('button');
    btn.setAttribute('id',letter); // btn-ს დავამატე აიდი რომელიც იქნება კონკრეტული ასო
    let txt = document.createTextNode(letter);
    btn.appendChild(txt);
    // ღილაკზე დაჭერისას რა მოხდეს
    btn.addEventListener('click', (e) => {
        btn.disabled = true;
        checkGuess(e.target.innerText)
    })
    return btn 
}

// ამოწმებს ასოს სიტყვაში
function checkGuess(letter){
    console.log(letter)
    console.log(guessWord)

    if(guessWord.includes(letter)){
        let copyGuess = guessWord;

    //    let newHidden =  copyGuess.split('').map((x) => {
    //         if (letter === x){
    //             return x
    //         }else return '-'
    //    }).join('')
    // ასევე შეგვიძლია newHidden-ის მისაღებას regExp გამოვიყენოთ.

        let exceptLetter = new RegExp(`[^${letter}]`, 'g')
        let newHidden = copyGuess.replace(exceptLetter,'-')

        
        hiddenWord = mergeTwoHiddens(hiddenWord, newHidden);
        console.log(hiddenWord)
        guessWordElement.innerHTML = hiddenWord

        if(hiddenWord == guessWord){
            alert('winner chicken dinner')
        } else {
            lives--
            if(lives === 0){
                alert ('lost')
            }
        }
    }
}

function mergeTwoHiddens(oldHidden, newHidden){
    let result = ''
    for(let i = 0; i < oldHidden.length; i++){
        if(oldHidden[i] === '-' && newHidden[i] === '-'){
            result += '-'
        }else {
            result += oldHidden[i] !== '-' ? oldHidden[i] : newHidden[i];
        }
    }
    return result
}

function displayButtons() {
    letters.split('').forEach((letter) => {
        let generetedBtn = generetionButton(letter);
        container.appendChild(generetedBtn)
    })
}

// თამაშის დაწყება, ღილაკზე დაჭერა
async function play () {
    container.style.display = 'flex';
    playButton.style.display = 'none'
    reload.style.display = 'block'
    displayButtons();
    // getRandomWord().then(() => getAndDisplayHidden()).catch(err => console.log(err));
    guessWord =  await getRandomWord();
    // console.log(guessWord)
    getAndDisplayHidden();
}

playButton.addEventListener('click', play)



// სიტყვის დამალვა და დაბეჭდვა
function getAndDisplayHidden() {
    hiddenWord = guessWord.replace(/[a-z]/gi,'-')
    guessWordElement.innerText = hiddenWord;
}

//რესტარტ ღილაკიი
reload.addEventListener('click', ()=> {
    window.location.reload();
})