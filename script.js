const counterTitleEl = document.querySelector('.counter__title');
const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');

decreaseButtonEl.addEventListener('click', function() {
    const currentValue = counterValueEl.textContent;
    let currentValueAsNumber = +currentValue;
    if (currentValueAsNumber != 0) {
        counterValueEl.textContent = --currentValueAsNumber;   
    }
    decreaseButtonEl.blur();
});

increaseButtonEl.addEventListener('click', incrementCounter);

resetButtonEl.addEventListener('click', function() {
    counterTitleEl.textContent = 'Fancy Counter';
    counterValueEl.textContent = 0;
    counterEl.classList.remove('counter--limit');
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
    resetButtonEl.blur();
});

// Keyboard Handler
document.addEventListener('keydown', incrementCounter);

function incrementCounter() {
    const currentValue = counterValueEl.textContent;

    let currentValueAsNumber = +currentValue;
    ++currentValueAsNumber;

    if (currentValueAsNumber > 5) {
        currentValueAsNumber = 5;
        // Visual Indication of limit hit
        counterEl.classList.add('counter--limit');
        counterTitleEl.innerHTML = "Limit! <br>Buy <b>Pro</b> Version for >5";
        // disable buttons
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
        console.log(decreaseButtonEl.disabled);
    } 
    counterValueEl.textContent = currentValueAsNumber;
    increaseButtonEl.blur();
}

