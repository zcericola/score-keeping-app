const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const resetButton = document.querySelector("#reset");
let pOneDisplay = document.querySelector('#pOneDisplay');
let pTwoDisplay = document.querySelector('#pTwoDisplay');
let winningNumDisplay = document.querySelector('#winningNumDisplay');
let numberInput = document.querySelector('input');
let pOneScore = 0;
let pTwoScore = 0;
let winningNum = 5;
let gameOver = false;



p1Button.addEventListener("click", function () {
    if (!gameOver) {
        pOneScore++;
        if (pOneScore === winningNum) {
            pOneDisplay.classList.add('win');
            gameOver = true;
        }
    }
    pOneDisplay.textContent = pOneScore;
})

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        pTwoScore++;
        if (pTwoScore === winningNum) {
            pTwoDisplay.classList.add('win');
            gameOver = true;
        }
    }
    pTwoDisplay.textContent = pTwoScore;
})

resetButton.addEventListener("click", function () {
    reset();

})

function reset() {
    pOneScore = 0;
    pTwoScore = 0;
    pOneDisplay.textContent = 0;
    pTwoDisplay.textContent = 0;
    pOneDisplay.classList.remove('win');
    pTwoDisplay.classList.remove('win');
    gameOver = false;


}

numberInput.addEventListener('change', function () {
    winningNumDisplay.textContent = this.value;
    winningNum = Number(this.value);
    reset();
})
