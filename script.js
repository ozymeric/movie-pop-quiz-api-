// ##################################################################################
// ######################## - SOLUTION USING .THEN() - ##############################
// ##################################################################################

const jokeEl = document.querySelector("#joke");
const jokeEl2 = document.querySelector("#answers");
const jokeBtn = document.querySelector("#jokeBtn");
const pTags = document.querySelectorAll("p");

/*
let questionBank = [];
let correctAnswers = [];
let quizBank = [];
*/

function getRandomDadJoke() {
  fetch("https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&difficulty=easy")
    .then((response) => response.json()).then((data) => {
      console.log(data);
      console.log("#################################")
/*
      for (let i of data) {
        console.log(i.question);
        questionBank.push(i.question);
        correctAnswers.push(i.correctAnswer);
      }
*/
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

/*
function quizBankAdder() {
  questionBank.forEach((question, index) =>
  quizBank.push(question, correctAnswers[index]))
};
*/

jokeBtn.addEventListener("click", getRandomDadJoke);

// ##################################################################################
// ################### - SOLUTION USING AWAIT ASYNC VERSION - #######################
// ##################################################################################
/*
// We create our header again
let config = {
  headers: {
    Accept: "application/json",
  },
};

// this time we'll write an async function, and we need this async keyword to do that:

async function getRandomDadJoke() {
  // first we create a variable and make a fetch request in it. But this time using await keyword:
  // again by adding our accept header of course;
  const response = await fetch("https://icanhazdadjoke.com", config);

  // then we create another varibale for our data and turn our response into a json format in it:
  // again by using await keyword of course:
  const data = await response.json();

  // and finally add this to our div's textContent:
  jokeEl.textContent = data.joke;
}

// In this solution; await keyword acts like .then() method. as we've created an async function,
// within this async function when we use await keyword, our next line of the code awaits until the await
// line of the code gets a response.

jokeBtn.addEventListener("click", getRandomDadJoke);
*/
// ##########################################################################
// ##########################################################################
// ######################## - UDEMY SOLUTION - ##############################
// ##########################################################################
// ##########################################################################

// const jokeEl = document.getElementById("joke");
// const jokeBtn = document.getElementById("jokeBtn");

// jokeBtn.addEventListener("click", generateJoke);

// generateJoke();

// USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const res = await fetch("https://icanhazdadjoke.com", config);

//   const data = await res.json();

//   jokeEl.innerHTML = data.joke;
// }
// ##########################################################################
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
