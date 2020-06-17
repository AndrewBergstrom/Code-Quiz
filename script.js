//method that we use to change defined tag
var h1Tag = document.querySelector(".hOne");
var myBtn = document.querySelector(".myBtn");
var welcomeDiv = document.querySelector(".welcome");
var answers = document.querySelector("#answers");
var questionsDiv = document.querySelector(".questions");
var questionTitle = document.querySelector(".myQuestion")

var lastPage = document.querySelector(".final");
var endGame = document.querySelector(".endGame");
var restartBtn = document.querySelector(".restart");
var finalPage = document.querySelector(".finalPage");
var initilasInput = document.querySelector(".initialsInput")
var initialsBtn = document.querySelector(".initialsBtn")
var timerEl = document.getElementById("countdown");



var correct = 0;
var incorrect = 0;
var total = 0;

var index = 0;



var myQuestions = [
    {
        questions: "The condition in an if/else statement is enclosed with _____   ",
        answers: ["Square Brackets", "Curly Brackets", "Parentheses", "Quotations"],
        correctAnswer: "Parentheses"
    },

    {
        questions: "The # symbol is used to grab what selector?",
        answers: ["tag", "id", "class", "first"],
        correctAnswer: "id"
    },

    {
        questions: "A useful tool during the development stage and debugging is_____?",
        answers: ["javaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    },

    {
        questions: "What HTML attribute references an external javaScript file?",
        answers: ["src", "href", "index", "class"],
        correctAnswer: "src"
    }

];



function start() {

    questionsDiv.style.display = "none";
    finalPage.style.display = "none"
    h1Tag.textContent = "Welcome to Code-Quiz";
    printQuestion()
}




//Shows questions from myQuestions
function printQuestion() {

    answers.innerHTML = ""
    questionTitle.textContent = myQuestions[index].questions;
    myQuestions[index].answers.forEach(function (answer) {
        //console.log(answer)
        //    create button, give text, give class
        var button = document.createElement("button")
        button.textContent = answer
        answers.appendChild(button)
        //console.log(button)
        // totalCounter();



    })


}


answers.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        if (index < myQuestions.length  -1) {
            if (event.target.textContent === myQuestions[index].correctAnswer) {
                console.log("correct")
                correct++;
                index++;
                total++;
                printQuestion()

            } else {
                console.log("you got it wrong")
                incorrect++;
                index++;
                total++;
                printQuestion()
                countDown -= 10
                if (countDown < 0) {
                    countDown = 0;
                }
            }

        } else {
            // console.log("Game Over");
            // questionsDiv.style.display = "none"
            // timerEl.textContent = "time: 0"
            // finalPage.style.display = "block"
            gameOver()
        }

    }

})

function gameOver(){
    console.log("Game Over");
    questionsDiv.style.display = "none"
    timerEl.textContent = "time: 0"
    finalPage.style.display = "block"

}


var countDown = 40

myBtn.addEventListener("click", timer)

function timer() {
    //Hiding html element
    welcomeDiv.style.display = " none"
    questionsDiv.style.display = "block"

    var clock = setInterval(function () {
        timerEl.innerHTML = "time: " + countDown
        countDown--;


        // if (countDown <=0 || myQuestions.length === index + 1) {
        if (countDown <=0 ) {
            clearInterval(clock);
            gameOver()

        }

    }, 1000);
}





initialsBtn.addEventListener("click", function () {
    var initilasAndScore = {
        initlas: initilasInput.value,
        score: correct
    }
    initilasAndScore = JSON.stringify(initilasAndScore)
    localStorage.setItem("scores", initilasAndScore)
    location.reload()

})


start()














