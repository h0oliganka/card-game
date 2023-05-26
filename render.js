// стартовая страница

export function renderStartPage({contentElement}) {
    let contentStartPage = `
    <div class="content__center">
            <h1 class="heading">Выбери <br>сложность</h1>
                <div class="buttons">
                    <div class="form__radio_btn">
                        <input id="radio-1" type="radio" name="radio" value="1" checked>
                        <label for="radio-1">1</label>
                    </div>
                    <div class="form__radio_btn">
                        <input id="radio-2" type="radio" name="radio" value="2">
                        <label for="radio-2">2</label>
                    </div>
                    <div class="form__radio_btn">
                        <input id="radio-3" type="radio" name="radio" value="3">
                        <label for="radio-3">3</label>
                    </div>
                </div>
            <div class="button__start_main"><button class="button__start">Старт</button></div>
        </div>
    `

    contentElement.innerHTML = contentStartPage;

    let buttonElement = document.querySelector('.form__radio_btn');
    let buttonStart = document.querySelector('.button__start');
    buttonStart.disabled = true;

    for(let key of buttonElement) {
        key.addEventListener('click', () => {
            for(let key of buttonElement) {
            key.classList.remove('form__radio_btn--active');
            }

            key.classList.add('form__radio_btn--active');
            window.localStorage.removeItem('radio');
            window.localStorage.setItem('radio', key.textContent);
            buttonStart.disabled = false;
            buttonStart.classList.remove('form__radio_btn--disabled');
        });
    }
}

// страница с легким уровнем

export function renderEasyPage({contentElement}) {
    let contentEasyPage = `
    <div class="content__center">
    <h1>Page 1 lvl</h1>
    </div>
    `

    contentElement.innerHTML = contentEasyPage;
}

// страница со средним уровнем

export function renderAveragePage({contentElement}) {
    let contentAveragePage = `
    <div class="content__center">
    <h1>Page 2 lvl</h1>
    </div>
    `

    contentElement.innerHTML = contentAveragePage;
}

// страница с тяжелым уровнем

export function renderHardPage({contentElement}) {
    let contentHardPage = `
    <div class="content__center">
    <h1>Page 2 lvl</h1>
    </div>
    `

    contentElement.innerHTML = contentHardPage;
}