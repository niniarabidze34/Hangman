import { ApiUrl,wordPath } from "./constants.js";

// რანდომ სიტყვის დაგენერირება
// function getRandomWord() {
//     return fetch('https://random-word-api.herokuapp.com/word')
//     .then(res => res.json())
//     .then(data =>{
//         guessWord = data[0]
//         console.log(guessWord)
//         return guessWord
//     })
//     .catch(err =>console.error(err))
// }  ქვევითა ფუნქცია იივე ოღონდ async await-ით წერია 


async function getRandomWord() {
    try {
        const res = await fetch(ApiUrl + wordPath);
        const data = await res.json();
        return data[0];
    } catch (err) {
        return console.error(err);
    }
}

export {getRandomWord}