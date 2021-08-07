var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var highScores = [
  {
    name: "Ayushi",
    score: 20,
  },

  {
    name: "UC",
    score: 15,
  },
]
const user=()=>{
console.log('Hey yah :)');
var userName = readlineSync.question('Please provide your good name to continue with this game : ');

console.log('Hello '+userName+',\n');
console.log('Welcome to '+chalk.yellowBright.bold('F.R.I.E.N.D.S Reunion quiz\n'));
console.log('If you have watched reunion! Let\'s see how much you know about it\n');
 console.log(chalk.yellowBright('-----------------------------------------------'));
console.log(chalk.green('Guide'));
console.log(chalk.magenta('> There are multiple choice questions'));
console.log(chalk.magenta('> Choose the options given below by selecting any of the key 1,2,3,4\n'));
 console.log(chalk.yellowBright('-----------------------------------------------'));


}


var questionBank = [
  {
    question : '"Well, maybe I don’t need your money". One of the most successful characters by the end of the show Rachel Green, played by Jennifer Aniston, was shown penniless and dependent on her father. Can you complete this famous dialogue of hers from the sitcom?',
    options : ["You're gonna love it",
"The one thing that's ours!",
"Is it me?",
"Wait wait I said maybe!"],
    answer :"Wait wait I said maybe!"
  },
  {
    question : '“Joey doesn’t share....". One of the most beloved characters on the show, Matt LeBlanc playing Joey Tribbiani said this phrase. Can you complete his iconic dialogue?',
    options : ["Food",
"Work",
"Money",
"Friend"],
    answer : "Food"
  },
  {
    question :  '“What\’s not to like?". Fans of the sitcom found Joey Tribbiani as one of the most relatable characters for his love for food. Can you complete his love confession for food?',
    options : ["Custard: good. Jam: good. Meat: good!",
 "I don\’t know. I\’ve never had to use the other one.",
"Cheese. It\'s milk that you chew.",
"This parachute is a knapsack!."],
    answer : 'Custard: good. Jam: good. Meat: good!'
  },
  {
    question : '"If you\'re too afraid to be in a relationship...". It was not only fun and games for the show but the sitcom also gave some valuable life lessons to its viewers. Said by the clean freak character Monica Geller, complete this dialogue from FRIENDS.',
    options : ["I wish I could, but I don\’t want to.",
"What\’s not to like? Custard: good. Jam: good. Meat: good!",
"Then don\'t be in one.",
"You can\’t just give up."],
    answer : "Then don\'t be in one." 
  },
    
  {
    question : '"It\'s so exhausting,..". Some of the most relatable dialogues were delivered by Phoebe Buffay on the show. can you complete this iconic dialogue of hers?',
    options : ["Waiting for death.", 
"Just take off your shirt and tell us.",
"Oh. My. God.",
"And I have to live with a boy!"],
    answer : "Waiting for death."
  },

  
]


function displayQuestion(question){
  console.log(chalk.blueBright.bold(question.question)+'\n')
  for(var i =1;i<=4;i++){
    console.log('['+i+'] '+question.options[i-1]);
  }
  var index = readlineSync.keyIn('\n\nChoose your Answer : ', {limit: '$<1-4>'});

  var userAnswer = question.options[index - 1];
  if(userAnswer === question.answer){
    console.log(chalk.bgGreen.black.bold('\nCorrect\n'));
    score = score +5;
  }
  else{
    console.log(chalk.bgRed.black.bold('\nWrong Answer\n'));
   
  }
}
const game=()=>{
  for(var i =0;i< questionBank.length ;i++){
  displayQuestion(questionBank[i]);
  console.log(chalk.blueBright('-----------------------------------------------'));
}
}


 

 
const showScores =()=> {
console.log(chalk.yellow.bold('\n Final Score : ', score+'\n'));
if(score === 25){
  console.log(chalk.green.bold('Yoo hoo! Congratulations \nYour All Answers are Correct \n'));
  
}

 console.log(chalk.magentaBright('-----------------------------------------------'));

  console.log("\nCheck the high scores, if your total score is higher that the high score ping me, I'll update it :)\n");
console.log (chalk.bgYellowBright("\nCurrent high scores\n" ))
  highScores.map(score => console.log(chalk.magentaBright(score.name), " : ", score.score))
  console.log ("\nThank You for Playing 😀")
}

user()
game()
showScores()