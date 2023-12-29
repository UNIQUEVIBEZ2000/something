const btnRest = document.querySelector(".again")
const quiz = document.querySelector(".number")
const guess = document.querySelector(".guess")
const btnCheck = document.querySelector(".check")
const messageEl = document.querySelector(".message")
const labelScore = document.querySelector(".score")
const labelHighScore = document.querySelector(".highscore")

let score = 15
let highscore = 0
let secretNumber = Math.trunc(Math.random()*20)+1
console.log(secretNumber);

function displayMessage(message){
    messageEl.textContent = message
}

btnCheck.addEventListener('click', ()=>{
    const number = Number(guess.value)
    if (!number) {
        displayMessage("⛔no number!")
    }
     else if(number === secretNumber){
        displayMessage("🎉Correct Number!")
        document.querySelector("body").style.backgroundColor = "green"
        quiz.textContent = number
        quiz.style.width = "30rem"
        quiz.style.fontSize = "8rem"
        if (score > highscore) {
            highscore = score
            labelHighScore.textContent = highscore
        }
    }
    else if(number !== secretNumber){
        if (score > 1){
            displayMessage(number < secretNumber ? "📉Too Low!" : "📈Too High!")
            score--
            labelScore.textContent = score

        }else{
            displayMessage("💥You lost The Game!")
            labelScore.textContent = 0
        }
    } 
})


btnRest.addEventListener('click', ()=>{
    secretNumber = Math.trunc(Math.random()*20)+1
    console.log(secretNumber);
    score = 15
    document.querySelector("body").style.backgroundColor = "black"
    quiz.textContent = "?"
    quiz.style.width = "15rem"
    quiz.style.fontSize = "6rem"
    displayMessage("Start guessing...")
    guess.value = ""
})