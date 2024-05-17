const startQuiz = document.querySelector('#startButton');
const infoContainer = document.querySelector('.info-container');
const exitButton = document.querySelector('#exitButton');
const btnContinue = document.querySelector('#continue');
const resultBox = document.querySelector('.result-box');

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
        score();
})


let questionCount = 0;
let questionNumber = 1;
let userScore = 0;

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

        nextBtn.classList.remove('active');
    }else {
        showResult();
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
    let allOptions = options.children.length;
    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        score();
    }else {
        answer.classList.add('wrong');

        //if answer is wrong , auto select correct answer

        for(let i = 0; i < allOptions; i++){
            if (options.children[i].textContent == correctAnswer) {
                options.children[i].setAttribute('class', 'answers correct')
            }
        }
    }


    //after choose option, disable all
    for (let i = 0; i < allOptions; i++){
        options.children[i].classList.add('disabled');
    }
  
    nextBtn.classList.add('active');
}

const totalQuestions = document.querySelector('#totalQuestions')

function questionCounter(index) {
     totalQuestions.textContent = `${index} of ${questions.length} Question`;
}

const scoreText = document.querySelector('.counting-box');

function score() {
    scoreText.textContent = `Score : ${userScore} / ${questions.length}`;
}
const finalScoreText = document.querySelector('.score-text');

function showResult(){
    resultBox.classList.add('active');
    quizSection.classList.remove('active');

    finalScoreText.textContent = `Your Score ${userScore} of ${questions.length}`

    const circularProgress = document.querySelector('.progress');
    const progressValue = document.querySelector('.progress-value');

    let progressStartValue = 0;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;

        circularProgress.style.background = `conic-gradient(#9d4edd ${progressStartValue * 3.6}deg, rgba(255,255,255, 0.1) 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
      
    }, speed);
}