(()=>{"use strict";let n=document.querySelector(".content");!function({contentElement:n}){n.innerHTML='\n    <div class="content-center">\n            <h1 class="heading">Выбери <br>сложность</h1>\n                <div class="buttons">\n                    <div class="form-radio-btn">\n                        <input id="radio1" type="radio" name="radio" value="1" checked>\n                        <label for="radio1">1</label>\n                    </div>\n                    <div class="form-radio-btn">\n                        <input id="radio2" type="radio" name="radio" value="2">\n                        <label for="radio2">2</label>\n                    </div>\n                    <div class="form-radio-btn">\n                        <input id="radio3" type="radio" name="radio" value="3">\n                        <label for="radio3">3</label>\n                    </div>\n                </div>\n            <div class="button-start"><button class="button-start-main">Старт</button></div>\n        </div>\n    '}({contentElement:n}),document.querySelector(".button-start").addEventListener("click",(()=>{let s=document.getElementById("radio1"),t=document.getElementById("radio2"),a=document.getElementById("radio3");s.checked&&function({contentElement:n}){n.innerHTML='\n    <div class="content level-page">\n    <div class="level-page-heading">\n  <div class="time-game">\n    <div class="min-sec">\n      <p class="min-sec">min</p>\n      <p class="min-sec">sec</p>\n    </div>\n    <h2 class="time">00.00</h2>\n  </div class="button-start-game">\n  <button class="button-start-main button-start-game">Начать заново</button>\n</div>\n<div class="cards">\n  <img class="cards-img" src="/img/туз пики.jpg" alt="туз пики">\n  <img class="cards-img"  src="/img/туз черви.jpg" alt="туз черви">\n  <img class="cards-img"  src="/img/туз бубны.jpg" alt="туз бубны">\n  <img class="cards-img"  src="/img/туз крести.jpg" alt="туз крести">\n</div>\n    </div>\n    '}({contentElement:n}),t.checked&&function({contentElement:n}){n.innerHTML='\n  <div class="content level-page">\n  <div class="level-page-heading">\n<div class="time-game">\n  <div class="min-sec">\n    <p class="min-sec">min</p>\n    <p class="min-sec">sec</p>\n  </div>\n  <h2 class="time">00.00</h2>\n</div class="button-start-game">\n<button class="button-start-main">Начать заново</button>\n</div>\n<div class="cards">\n<img class="cards-img" src="/img/туз пики.jpg" alt="туз пики">\n<img class="cards-img" src="/img/туз черви.jpg" alt="туз черви">\n<img class="cards-img" src="/img/туз бубны.jpg" alt="туз бубны">\n<img class="cards-img" src="/img/туз крести.jpg" alt="туз крести">\n</div>\n  </div>\n    '}({contentElement:n}),a.checked&&function({contentElement:n}){n.innerHTML='\n  <div class="content level-page">\n  <div class="level-page-heading">\n<div class="time-game">\n  <div class="min-sec">\n    <p class="min-sec">min</p>\n    <p class="min-sec">sec</p>\n  </div>\n  <h2 class="time">00.00</h2>\n</div class="button-start-game">\n<button class="button-start-main">Начать заново</button>\n</div>\n<div class="cards">\n<img class="cards-img" src="/img/туз пики.jpg" alt="туз пики">\n<img class="cards-img" src="/img/туз черви.jpg" alt="туз черви">\n<img class="cards-img" src="/img/туз бубны.jpg" alt="туз бубны">\n<img class="cards-img" src="/img/туз крести.jpg" alt="туз крести">\n</div>\n  </div>\n    '}({contentElement:n})}))})();