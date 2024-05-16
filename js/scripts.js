const startQuiz = document.querySelector('#startButton');
const infoContainer = document.querySelector('.info-container');
const exitButton = document.querySelector('#exitButton');
const btnContinue = document.querySelector('#continue')

const quizSection = document.querySelector('.quiz-section');
const questionsBox = document.querySelector('.questions-box');
const main = document.querySelector('.main');

//open quiz guide popup
startQuiz.addEventListener('click', ()=> {
    infoContainer.classList.add('active');
    main.classList.add('active');
}) 
//exit quiz from guide popup 
exitButton.addEventListener('click' ,()=> {
    infoContainer.classList.remove('active');
    main.classList.remove('active');
})
//show up quiz section
btnContinue.addEventListener('click', ()=> {
    quizSection.classList.add('active');
    infoContainer.classList.remove('active');
    questionsBox.classList.add('active');

    getQuestions(0)
})


let questionCount = 0;

// get all questions from array

const questionText = document.querySelector('.questions-head');
const nextBtn = document.querySelector('.next');
const options = document.querySelector('.answers-box');

nextBtn.addEventListener('click', ()=> {
    questionCount++;
    getQuestions(questionCount);
})

function getQuestions(index) {
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;

    let optionTag = `<div class="answers"><span>A. </span><span>${questions[index].options[0]}</span></div>
    <div class="answers"><span>B. </span><span>${questions[index].options[1]}</span></div>
    <div class="answers"><span>C. </span><span>${questions[index].options[2]}</span></div>
    <div class="answers"><span>D. </span><span>${questions[index].options[3]}</span></div>`;

    options.innerHTML = optionTag;
}