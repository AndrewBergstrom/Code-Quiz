
var h1Tag =document.querySelector(".hOne")
var myBtn = document.querySelector(".myBtn")
var welcomeDiv = document.querySelector(".welcome")
var questionsDiv = document.querySelector(".questions")
//method that we use to change defined tag

var myQuestions=[
    {
        questions: "Is today fun?",
        answers: ["Yes", "No", "Not Sure!"],
        correctAnswer: "Yes"
    },
    {
        questions: "Is today fun?",
        answers: ["Yes", "No", "Not Sure!"],
        correctAnswer: "Yes"
    }
]


//h1Tag.textContent = myQuestions[0].answers[0]

h1Tag.textContent = "Welcome to Code-Quiz"
questionsDiv.style.display="none"

myBtn.addEventListener("click",function(){ 
    //Hiding html element
welcomeDiv.style.display= " none"
questionsDiv.style.display="block"
})


//if (event.taget.textcontent === myQuestions[Whatever the index of that question is].answers)