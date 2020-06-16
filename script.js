//method that we use to change defined tag
var h1Tag = document.querySelector(".hOne");
var myBtn = document.querySelector(".myBtn");
var welcomeDiv = document.querySelector(".welcome");
var answers = document.querySelector("#answers");
var questionsDiv = document.querySelector(".questions");
var questionTitle = document.querySelector(".myQuestion")
// var btnOne = document.querySelector(".choice1");
// var btnTwo = document.querySelector(".choice1");
// var btnThree = document.querySelector(".choice1");
// var btnFour = document.querySelector(".choice1");
var correct = 0
var incorrect = 0

var index = 0 

var myQuestions = [
    {
        questions: "The condition in an if/else statement is enclosed with _____   ",
        answers: ["Square Brackets", "Curly Brackets", "Parentheses", "Quotations"],
        correctAnswer: "Parentheses"
    },
    {
        questions: "Is today fun?",
        answers: ["Yes", "No", "Not Sure!"],
        correctAnswer: "Yes"
    }
];


h1Tag.textContent = "Welcome to Code-Quiz";
questionsDiv.style.display = "none";


//Shows questions from myQuestions
function printQuestion() {
answers.innerHTML = ""
   questionTitle.textContent = myQuestions[index].questions;
   myQuestions[index].answers.forEach(function(answer){
       console.log(answer)
    //    create button, give text, give class
    var button = document.createElement("button")
    button.textContent = answer
    answers.appendChild(button)
    console.log(button)

    // append new button to questions dive, this will append it under question title.
    
   })


}


function checkResults(event) { }
// ues event target to get data
// assign questions from answers array to button objects
//for loop - changes questions and answers
answers.addEventListener("click",function(event){
   
    if(event.target.matches("button")){
        if(event.target.textContent === myQuestions[index].correctAnswer){
            console.log("correct")
        correct ++;
        index ++;
            printQuestion()
        }else{
            console.log("you got it wrong")
            incorrect ++;
            index ++;
            printQuestion()
        }
    }

})

myBtn.addEventListener("click", function () {
    //Hiding html element
    welcomeDiv.style.display = " none"
    questionsDiv.style.display = "block"
})


printQuestion();



// The code snippet below generates the question from the myQuestios array, but displays the question on homepage, question page and at the bottom.

// for (var i = 0; i< myQuestions.length; i++){
//     var questions = myQuestions[i].questions;
//     document.write(questions);
//     var options = myQuestions[i].answers;

// }







// answers.addEventListener("click",function(){
//     myQuestions.style.display ="block"
//    // console.log(myQuestions)
// })

//myQuestions.textContent=
//myQuestions.textContent = myQuestions[0].answers[0]

//if (event.taget.textcontent === myQuestions[Whatever the index of that question is].answers)