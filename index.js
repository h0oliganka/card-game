import { renderStartPage, renderEasyPage,renderAveragePage, renderHardPage } from "./render.js";

let contentElement = document.querySelector('.content');
let gameLevel = 0;
window.localStorage.removeItem('radio');

renderStartPage({contentElement});

let startMainButton = document.querySelector('.button__start');

startMainButton/addEventListener('click', () => {

    if (startMainButton.disabled == true) {
        alert('Выберите сложность')
        return;
    }

    gameLevel = window.localStorage.getItem('radio');

    switch(gameLevel) {
        case '1' : renderEasyPage({contentElement});
        break;
        case '2' : renderAveragePage({contentElement});
        break;
        case '3' : renderHardPage({contentElement});
        default : ;
        break;
    }
})