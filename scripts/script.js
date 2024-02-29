
let questions = null;
let questionsAnswered = 0;


class GameQuizAPI {
    constructor() {
      this.url = "https://opentdb.com/api.php?amount=12&category=32&difficulty=easy&type=multiple";
    }
  
    async getQuestions() {
      try {
        const response = await axios.get(`${this.url}`);

        for (let i = 0; i < response.data.results.length; i++) {
            const questions = response.data.results[i].question;
            // console.log(questions);
        }

        return response.data.results;
        

      } catch (error) {

      }
  
    }
    
}


const fetchData = async () => {
const quiz = new GameQuizAPI;
questions = await quiz.getQuestions();

// console.log(questions[0].question);

// use dom to put first question on the page?
const quizQuestion = document.querySelector(".quiz__question");

console.log(questions)

quizQuestion.innerHTML = `<p class="quiz__question"> ${questions[0].question}</p>`;

const correctAnswer = document.querySelector(".quiz__correct");
correctAnswer.innerText = questions[0].correct_answer;

// 1. query all buttons (they should all have same class
// 3. choose a random button to assign correct answer
// 3. remove that  button the node array
// 4. loop through remainaing in that array, add the incorrect anwsers


btns[Math.floor(Math.random() * 3) + 1]

// for (let i = 0; i < questions[0].incorrect_answers.length; i++ ) {
    const incorrectAnswerA = document.querySelector(".quiz__incorrect--a");
    incorrectAnswerA.innerText = questions[0].incorrect_answers[0];
    const incorrectAnswerB = document.querySelector(".quiz__incorrect--b");
    incorrectAnswerB.innerText = questions[0].incorrect_answers[1];
    const incorrectAnswerC = document.querySelector(".quiz__incorrect--c");
    incorrectAnswerC.innerText = questions[0].incorrect_answers[2];
    // console.log(incorrectAnswer)
    // console.log(questions[i].incorrect_answers);
// }


}

fetchData();


const btns = document.querySelectorAll("button");
let score = document.querySelector(".quiz__points");

const checkAnswer = (e) => {
    e.preventDefault();
    if (e.target.className !== "quiz__correct") {
        incorrect()
    } else {
        score.innerText = parseInt(score.innerText, 10) + 1;
        jumpMario()
        fetchData();
    }
}

console.log(btns);

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", checkAnswer);
}

const jumpMario = () => {
    const mario = document.querySelector(".game__mario");
    mario.classList.add("game__mario--jump");
}

const incorrect = () => {
    const question = document.querySelector("quiz__question");
    question.innerText = "Wrong Answer!";
    mario.classList.remove("game__mario--jump");

}
