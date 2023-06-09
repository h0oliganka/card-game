import {
    renderStartPage,
    renderEasyPage,
    renderAveragePage,
    renderHardPage,
} from './render.js'
import Deck from './deck.js'

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

let contentElement = document.querySelector('.content')

renderStartPage({ contentElement })

let startMainButton = document.querySelector('.button-start')

startMainButton.addEventListener('click', () => {
    let buttonRadioOne = document.getElementById('radio1')
    let buttonRadioTwo = document.getElementById('radio2')
    let buttonRadioThree = document.getElementById('radio3')

    if (buttonRadioOne.checked) {
        renderEasyPage({ contentElement })
    }

    if (buttonRadioTwo.checked) {
        renderAveragePage({ contentElement })
    }

    if (buttonRadioThree.checked) {
        renderHardPage({ contentElement })
    }
})

// let buttonGameStart = document.getElementById(".button-start-game");

// buttonGameStart.addEventListener("click", () => {
//   if (buttonGameStart) {
//     renderStartPage({ contentElement });
//   }
// });
