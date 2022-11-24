
const jokeEl = document.querySelector("#joke");
const jokeEl2 = document.querySelector("#answers");
const jokeBtn = document.querySelector("#jokeBtn");
const pTags = document.querySelectorAll("p");

let questionBank = [];
let correctAnswers = [];
let quizBank = [];

function getRandomDadJoke() {
  fetch("https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&difficulty=easy")
    .then((response) => response.json()).then((data) => {
      console.log(data);
      console.log("#################################")

      for (let i of data) {
        questionBank.push(i.question);
        correctAnswers.push(i.correctAnswer);
      }

      for (let i of data) {
        //console.log(i.question, i.correctAnswer, i.incorrectAnswers);
        let answers = [i.incorrectAnswers[0], i.incorrectAnswers[1], i.incorrectAnswers[2], i.correctAnswer];
        jokeEl.textContent = i.question;
        pTags.forEach((tag, index) =>
          tag.textContent = `${index + 1}: ${answers[index]}`);
        //jokeEl2.textContent = "a) " + answers[0] + '\n' +" b) " + answers[1] + " c) " + answers[2] + " d) " + answers[3];
      }
    });
};

jokeBtn.addEventListener("click", getRandomDadJoke);
