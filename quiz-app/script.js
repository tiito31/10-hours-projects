const quizData = [{
    question: 'How  old is Florin',
    a: '10',
    b: '17',
    c: '26',
    d: '100',
    correct: 'c'
}, {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Pyhton',
    d: 'JavaScript',
    correct: 'a'
}, {
    question: 'Who is the President of Indonesia?',
    a: 'Bowo',
    b: 'Jokowi',
    c: 'Mas Agus',
    d: 'Agus Budiman',
    correct: 'b'
}, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopter Terminals Motorboats Lamborginis',
    correct: 'a'
}, {
    question: 'What yaer was JavaScripts launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: '1997',
    correct: 'a'
}];

const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const question1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    question1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} question.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});