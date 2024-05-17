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

    getQuestions(0);
    questionCounter(1);
})


let questionCount = 0;
let questionNumber = 1;

// get all questions from array

const questionText = document.querySelector('.questions-head');
const nextBtn = document.querySelector('.next');
const options = document.querySelector('.answers-box');

nextBtn.addEventListener('click', ()=> {
    if (questionCount < questions.length - 1) {
        questionCount++;
        getQuestions(questionCount);

        questionNumber++;
        questionCounter(questionNumber);
    }else {
        console.log('completted')
    }

})

function getQuestions(index) {
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;

    let optionTag = `<div class="answers">${questions[index].options[0]}</div>
    <div class="answers">${questions[index].options[1]}</div>
    <div class="answers">${questions[index].options[2]}</div>
    <div class="answers">${questions[index].options[3]}</div>`;

    options.innerHTML = optionTag;

    const option = document.querySelectorAll('.answers');
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
    }else {
        answer.classList.add('wrong');
    }
  
}

const totalQuestions = document.querySelector('#totalQuestions')

function questionCounter(index) {
     totalQuestions.textContent = `${index} of ${questions.length} Question`;
}