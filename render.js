// стартовая страница

export function renderStartPage({ contentElement }) {
    let contentStartPage = `
    <div class="content-center">
            <h1 class="heading">Выбери <br>сложность</h1>
                <div class="buttons">
                    <div class="form-radio-btn">
                        <input id="radio1" type="radio" name="radio" value="1" checked>
                        <label for="radio1">1</label>
                    </div>
                    <div class="form-radio-btn">
                        <input id="radio2" type="radio" name="radio" value="2">
                        <label for="radio2">2</label>
                    </div>
                    <div class="form-radio-btn">
                        <input id="radio3" type="radio" name="radio" value="3">
                        <label for="radio3">3</label>
                    </div>
                </div>
            <div class="button-start"><button class="button-start-main">Старт</button></div>
        </div>
    `

    contentElement.innerHTML = contentStartPage
}

// страница с легким уровнем

export function renderEasyPage({ contentElement }) {
    let contentEasyPage = `
    <div class="content level-page">
    <div class="level-page-heading">
  <div class="time-game">
    <div class="min-sec">
      <p class="min-sec">min</p>
      <p class="min-sec">sec</p>
    </div>
    <h2 class="time">00.00</h2>
  </div class="button-start-game">
  <button class="button-start-main button-start-game">Начать заново</button>
</div>
<div class="cards">
  
</div>
    </div>
    `

    contentElement.innerHTML = contentEasyPage
}

// страница со средним уровнем

export function renderAveragePage({ contentElement }) {
    let contentAveragePage = `
  <div class="content level-page">
  <div class="level-page-heading">
<div class="time-game">
  <div class="min-sec">
    <p class="min-sec">min</p>
    <p class="min-sec">sec</p>
  </div>
  <h2 class="time">00.00</h2>
</div class="button-start-game">
<button class="button-start-main">Начать заново</button>
</div>
<div class="cards">

</div>
  </div>
    `

    contentElement.innerHTML = contentAveragePage
}

// страница с тяжелым уровнем

export function renderHardPage({ contentElement }) {
    let contentHardPage = `
  <div class="content level-page">
  <div class="level-page-heading">
<div class="time-game">
  <div class="min-sec">
    <p class="min-sec">min</p>
    <p class="min-sec">sec</p>
  </div>
  <h2 class="time">00.00</h2>
</div class="button-start-game">
<button class="button-start-main">Начать заново</button>
</div>
<div class="cards">

</div>
  </div>
    `

    contentElement.innerHTML = contentHardPage
}
