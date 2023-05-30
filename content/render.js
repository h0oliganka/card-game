// стартовая страница

export function renderStartPage({ contentElement }) {
  let contentStartPage = `
    <div class="content__center">
            <h1 class="heading">Выбери <br>сложность</h1>
                <div class="buttons">
                    <div class="form__radio_btn">
                        <input id="radio1" type="radio" name="radio" value="1" checked>
                        <label for="radio1">1</label>
                    </div>
                    <div class="form__radio_btn">
                        <input id="radio2" type="radio" name="radio" value="2">
                        <label for="radio2">2</label>
                    </div>
                    <div class="form__radio_btn">
                        <input id="radio3" type="radio" name="radio" value="3">
                        <label for="radio3">3</label>
                    </div>
                </div>
            <div class="button__start"><button class="button__start_main">Старт</button></div>
        </div>
    `;

  contentElement.innerHTML = contentStartPage;
}

// страница с легким уровнем

export function renderEasyPage({ contentElement }) {
  let contentEasyPage = `
    <div class="content__center">
    <h1>Page 1 lvl</h1>
    </div>
    `;

  contentElement.innerHTML = contentEasyPage;
}

// страница со средним уровнем

export function renderAveragePage({ contentElement }) {
  let contentAveragePage = `
    <div class="content__center">
    <h1>Page 2 lvl</h1>
    </div>
    `;

  contentElement.innerHTML = contentAveragePage;
}

// страница с тяжелым уровнем

export function renderHardPage({ contentElement }) {
  let contentHardPage = `
    <div class="content__center">
    <h1>Page 3 lvl</h1>
    </div>
    `;

  contentElement.innerHTML = contentHardPage;
}
