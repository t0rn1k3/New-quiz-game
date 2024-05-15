const startQuiz = document.querySelector('#startButton');
const infoContainer = document.querySelector('.info-container');
const exitButton = document.querySelector('#exitButton');

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