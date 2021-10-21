const quizData = [
	{
		question: 'Коя е столицата на България ?',
		a: 'София',
		b: 'Пловдив',
		c: 'Варна ',
		d: 'Бургас',
		correct: 'a',
	}, {
		question: 'Къде се намира Швейцария ?',
		a:'Европа',
		b:'Северна Америка',
		c:'Азия',
		d:'Африка',
		correct: 'a',
	}, {
		question: 'Кой е президент на САЩ ? ',
		a:'Барак Обама',
		b:'Джордж Буш',
		c:'ЛеБрон Джеймс',
		d:'Доналд Тръпм',
		correct: 'd',
	}, {
		question:'Кога е създаден JavaScript ?',
		a:'1952',
		b:'1879',
		c:'Никой от посочените',
		d:'2001',
		correct:'c',
	}
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
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

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});