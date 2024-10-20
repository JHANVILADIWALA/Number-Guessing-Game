let randomNum = (parseInt(Math.random() * 100 + 1))
console.log(randomNum)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    //valid number guessed or not
      if(isNaN(guess)){
        alert('Please enter valid number')
      }
      else if(guess<1){
        alert('Please enter number more than 1')
      }
      else if(guess>100){
        alert('Please enter number less than 100')
      }
      else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        } 
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
      }
}

function checkGuess(guess){
    //guessed value correct/high/low ???
    console.log(`high or low part, randomnum is : ${randomNum}`)
    if(guess === randomNum){
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if(guess<randomNum){
        displayMessage(`Number is tooo low`)
    }
    else if(guess > randomNum){
        displayMessage(`Number is tooo high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" style="color: blue; cursor: pointer; background-color: white;">Click here to Start new game</h2>
`
    startover.appendChild(p);
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum = (parseInt(Math.random() * 100 + 1))
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)

        playGame=true
    })
}

