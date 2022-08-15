var readlineSync = require('readline-sync');
var score=0;

var quiz=[{
question:'Am i older than 25? ',
answer:'yes'
},
{
 question:'where do i leave? ',
 answer:'Varanasi'
},
{
 question:'What i want to do?',
 answer:'Web devloper'
},
{
  question:'What is my favrouite color? ',
  answer:'Pink'
},
 {
  question:'what is my higest degree? ',
   answer:'MTech'
 }
]

function play(question,answer)
  {
    var useranswer=readlineSync.question(quiz[i].question);
    if(useranswer===quiz[i].answer)
    {
      console.log('You are correct');
      score=score+1;
    }
    else
    {
      console.log('Answer is wrong');
      score=score-1;
    }
    console.log('Your score is ' +score);
    console.log('_____________________')
  }

for(var i=0; i<quiz.length;i++)
  {
    var currentQuestion=quiz[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
