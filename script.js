//method that we use to change defined tag
var h1Tag = document.querySelector(".hOne");
var myBtn = document.querySelector(".myBtn");
var welcomeDiv = document.querySelector(".welcome");
var answers = document.querySelector(".answers");
var questionsDiv = document.querySelector(".questions");


h1Tag.textContent = "Welcome to Code-Quiz";
questionsDiv.style.display = "none";


//This function grabs the question from var myQuestions
function printQuestion(question) {

    var questionH2 = document.querySelector(".myQuestion");
    questionH2.innerHTML = question.questions
    
   
}

// ues event target to get data
// assign questions from answers array to button objects
//for loop - changes questions and answers

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

printQuestion(myQuestions[0])


// The code snippet below generates the question from the myQuestios array, but displays the question on homepage, question page and at the bottom.

// for (var i = 0; i< myQuestions.length; i++){
//     var questions = myQuestions[i].questions;
//     document.write(questions);
//     var options = myQuestions[i].answers;

// }




myBtn.addEventListener("click", function () {
    //Hiding html element
    welcomeDiv.style.display = " none"
    questionsDiv.style.display = "block"
})


// answers.addEventListener("click",function(){
//     myQuestions.style.display ="block"
//    // console.log(myQuestions)
// })

//myQuestions.textContent=
//myQuestions.textContent = myQuestions[0].answers[0]

//if (event.taget.textcontent === myQuestions[Whatever the index of that question is].answers)