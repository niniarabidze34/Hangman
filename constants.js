const container = document.getElementsByClassName('btn-container')[0];
const guessWordElement = document.getElementById('guessWord')
const playButton = document.getElementById('play')
const reload = document.getElementById('reload')
const LETTERS =  'abcdefghijklmnopqrstuvwxyz';
const ApiUrl = 'https://random-word-api.herokuapp.com'
const wordPath = '/word'

const hangman_lives = 6;

export {container,playButton,guessWordElement,hangman_lives,LETTERS, ApiUrl ,wordPath,reload}