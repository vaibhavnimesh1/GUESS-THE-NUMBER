let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
    userInput.value=""
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
    userInput.value=""
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
    userInput.value=""
  } else {
    prevGuess.push(guess);
    if (numGuess ===5) {
      clearGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      clearGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function clearGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++
  remaining.innerHTML=`${6-numGuess}`
}
function displayMessage(message){
lowOrHi.innerHTML= message
}

function endGame(){
  userInput.value =""
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Play Game Again</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame(){
  const newGameBtn = document.querySelector('#newGame')
  newGameBtn.addEventListener('click', function(){

    userInput.value = ""
    randomNumber = parseInt(Math.random() * 100 + 1)
  
    numGuess=1
    prevGuess=[]
    guessSlot.innerHTML=""
    remaining.innerHTML=`${6-numGuess}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    displayMessage('')
    

    playGame=true
  });

}