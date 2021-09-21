

var readlineSync = require('readline-sync');
const chalk = require('chalk');

score=0;
let userName = readlineSync.question("what is your name ?   ->    ");
console.log(`Welcome ${userName} how r u `);
console.log (`Dear ${userName} Grab your seatbelts...`);
 

function quiz(question , answer)
{
  let userAnswer = readlineSync.question(question);
  if (userAnswer === answer)
  {
    console.log(`yes you are right mr.${userName}`)
    score++;
  }
else {
  console.log( `No Mr.${userName} you are wrong`)
  score--;
}
console.log('current score', score);
console.log(`----------------------`);
}

let questions = [{
  question: "What is My full Name? ",
answer: "Suyash Tiwari"},{
  question: "What is my favorite game ---> ",
  answer: "chess"},{
  question: "Which company phone do I use  ---> ",
  answer: "samsung"},{
  question: "I have done B.tech , b.sc or b.com ---> ",
  answer: "B.tech"}, {
  question: "What is my favorite dish  ---> ",
  answer: "dosa "}
]
 for (let i=0 ; i<questions.length ; i++)
 {
   let currentQuestion = questions[i];
   quiz(currentQuestion.question , currentQuestion.answer);
 }
  console.log(chalk.blue("Your final score is ") , score );