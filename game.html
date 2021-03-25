
let game = null;
let state = "text";
let process_jeu_1 = null
let process_jeu_2 = null
let process_jeu_3 = null
let process_jeu_4 = null
let textIn  = null
let textOut = null
let score = null
let countdown = 0
const answerDisplayTime = 4;
noteTranslationDict = {
    "B":"♭",
    "D":"♯"
  }
isTimerLaunched = false

function launchTimer(){
  setInterval(updateTimer.bind(), 1000);
  return true
}
function updateTimer() {
    if (this.timeLeft <= 0) {
      game.gameOver();
    }
    else{
    countdown = countdown - 1;
    if(countdown != 0){
      timer = countdown - 1;
      if(countdown == 0){
        if(state == "text"){
          textAnswer.innerText = ""
        }
        else if(state == "piano"){
          //TODO
        }
      }
    }
    clock.innerText = "Time : " + countdown;
    }
  }

function arrayCompare(_arr1, _arr2) {
    if (
      !Array.isArray(_arr1)
      || !Array.isArray(_arr2)
      || _arr1.length !== _arr2.length
      ) {
        return false;
      }

    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
         }
    }
    return true
}



function changeState(inState){
  state = inState
}
function selectGame(gameId){
  if(!isTimerLaunched)
    isTimerLaunched = launchTimer()
  switch(gameId){
    case 1:
      game = new Game1(process_jeu_1);
      break;
    case 2:
      game = new Game2(process_jeu_2);
      break;
    case 3:
      game = new Game3(process_jeu_3);
      break;
    case 4:
      game = new Game4(process_jeu_4);
      break;
  }
  game.start()
}

class Game {
    constructor(data) {  // data est le jeu de données (ici la variable process_jeu_1)
      this.score = 0;
      this.currentQuestion = null;
      this.currentAnswer = null;
      this.gameLength = 100;
      this.timer = null;
      this.data = data;
      this.answerTimer = 0;
    }

    getNextQuestion() {
      const random = Math.floor(Math.random() * this.data.length);
      this.currentQuestion = this.data[random].question;
      this.currentAnswer = this.data[random].validator;
      this.data.splice(random, 1);

      if(state == "text"){
        textQuestion.innerText = this.currentQuestion + "\n";
      }
      else if(state == "piano"){
        //TODO
      }
    }

    start() {
      game.getNextQuestion();
      this.setTimer()

    }
    setTimer(){
      countdown = this.gameLength
    }
    answerTextFormatted(){
      var answer = this.currentAnswer
      if(typeof(answer) == "string"){
        for (var key in noteTranslationDict){
          answer = answer.replace(key,noteTranslationDict[key]);

        }
        return answer;
      }
      else {
        var str = ""
        for (var value in answer){
          var temp = answer[value]
          for (var key in noteTranslationDict){
            temp = temp.replace(key,noteTranslationDict[key]);
          }
          str += temp + ",";
        }
        return str.slice(0,-1);
      }

    }
    updateTimer() {
      if (this.timeLeft <= 0) {
        this.gameOver();
      }
      else{
      this.timeLeft = this.timeLeft - 1;
      if(this.answerTimer != 0){
        this.answerTimer = this.answerTimer - 1;
        if(this.answerTimer == 0){
          if(state == "text"){
            textAnswer.innerText = ""
          }
          else if(state == "piano"){
            //TODO
          }
        }
      }
      clock.innerText = "Time : " + this.timeLeft;
      }
    }

    gameOver() {
      console.log("perdu");

      clearInterval(this.timer);
      score.innerText = "Game Over!, votre score est : " + this.score;
      clock.innerText = ""
      this.timer = null
      if(state == "text"){
        textAnswer.innerText = ""
        textQuestion.innerText = ""
      }
      else if(state == "piano"){
        //TODO
      }
      game = null
    }
    validateAnswer(isValid){
      if(isValid){
        textAnswer.innerText = "Bonne réponse \n"
        this.increaseScore()
      }
      else
        textAnswer.innerText = "Mauvais reponse, la bonne reponse est :" + this.answerTextFormatted() + "\n";
    }
    increaseScore(){
      this.score += 1
      score.innerText = "Score :" + this.score
    }
  }


class Game1 extends Game {
  constructor(data) {
    super(data);
  }

  checkAnswer(key = null) { //key c'est un parametre propre au piano(tu mettrais l'input je pense toi)
                                  //correct c'est currentAnswer
    if (state == "text") {
      var answerIn = textIn.value
      this.validateAnswer(answerIn == this.currentAnswer)
    }
    else if(state == "piano"){
      //TODO
    }
    this.answerTimer = answerDisplayTime;
    this.getNextQuestion();
   } //fin fonction
} // fin classe
class Game2 extends Game {
  constructor(data) {
    super(data);
  }

  checkAnswer(key = null) { //key c'est un parametre propre au piano(tu mettrais l'input je pense toi)
                                  //correct c'est currentAnswer
    if (state == "text") {
      var answerIn = textIn.value
      this.validateAnswer(answerIn == this.currentAnswer)
    }
    else if(state == "piano"){
      //TODO
    }
    this.answerTimer = answerDisplayTime;
    this.getNextQuestion();
   } //fin fonction
} // fin classe

class Game3 extends Game {
  constructor(data) {
    super(data);
  }

  checkAnswer(key = null) { //key c'est un parametre propre au piano(tu mettrais l'input je pense toi)
                                  //correct c'est currentAnswer
    if (state == "text") {
       var answerIn = textIn.value.split(",")
      if(typeof(this.currentAnswer) == "string")
        var answerCheck = answerIn == this.currentAnswer;
      else{
        var answerCheck = arrayCompare(answerIn,this.currentAnswer)
      }
      this.validateAnswer(answerCheck)
    }
    else if(state == "piano"){
      //TODO
    }
    this.answerTimer = answerDisplayTime;
    this.getNextQuestion();
   } //fin fonction
} // fin classe
class Game4 extends Game {
  constructor(data) {
    super(data);
  }

  checkAnswer(key = null) { //key c'est un parametre propre au piano(tu mettrais l'input je pense toi)
                                  //correct c'est currentAnswer
    if (state == "text") {
      var answerIn = textIn.value.split(",")

      var answerCheck = arrayCompare(answerIn,this.currentAnswer);
      this.validateAnswer(answerCheck)
    }
    else if(state == "piano"){
      //TODO
    }
    this.answerTimer = answerDisplayTime;
    this.getNextQuestion();
   } //fin fonction
} // fin classe


function getEchelle(liste) {
  let array = [];
  for (let index = 0; index < 6; index++) {
    array.push(liste.getElementsByTagName("li")[index].childNodes[0].data);
  }
  return array;
}
$(document).ready(function () {
score = document.getElementById("score");
clock = document.getElementById("timer")
textIn = document.getElementById("input-textbox");
textQuestion = document.getElementById("output-textbox-question");
textAnswer = document.getElementById("output-textbox-answer");
process_jeu_1 = [
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7b.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[0]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7b.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[0]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7b.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[0]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7b.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[0]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7b.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[15]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7b.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[15]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7b.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[15]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7b.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[15]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6b.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[1]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6b.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[1]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6b.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[1]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6b.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[1]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6b.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[16]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6b.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[16]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6b.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[16]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6b.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[16]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5b.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[2]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5b.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[2]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5b.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[2]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5b.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[2]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5b.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[17]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5b.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[17]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5b.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[17]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5b.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[17]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4b.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[3]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4b.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[3]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4b.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[3]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4b.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[3]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4b.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[18]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4b.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[18]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4b.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[18]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4b.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[18]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3b.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[4]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3b.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[4]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3b.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[4]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3b.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[4]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3b.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[19]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3b.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[19]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3b.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[19]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3b.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[19]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2b.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[5]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2b.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[5]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2b.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[5]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2b.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[5]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2b.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[20]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2b.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[20]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2b.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[20]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2b.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[20]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1b.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[6]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1b.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[6]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1b.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[6]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1b.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[6]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1b.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[21]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1b.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[21]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1b.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[21]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1b.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[21]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-0.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[7]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-0.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[7]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-0.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[7]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-0.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[7]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-0.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[22]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-0.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[22]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-0.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[22]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-0.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[22]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1d.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[8]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1d.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[8]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1d.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[8]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1d.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[8]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1d.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[23]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1d.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[23]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1d.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[23]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-1d.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[23]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2d.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[9]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2d.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[9]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2d.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[9]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2d.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[9]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2d.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[24]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2d.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[24]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2d.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[24]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-2d.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[24]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3d.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[10]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3d.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[10]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3d.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[10]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3d.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[10]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3d.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[25]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3d.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[25]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3d.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[25]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-3d.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[25]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4d.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[11]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4d.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[11]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4d.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[11]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4d.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[11]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4d.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[26]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4d.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[26]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4d.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[26]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-4d.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[26]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5d.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[12]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5d.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[12]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5d.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[12]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5d.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[12]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5d.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[27]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5d.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[27]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5d.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[27]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-5d.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[27]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6d.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[13]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6d.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[13]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6d.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[13]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6d.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[13]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6d.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[28]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6d.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[28]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6d.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[28]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-6d.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[28]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7d.question-tonique.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[14]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7d.question-mediante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[14]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7d.question-dominante.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[14]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7d.question-sensible.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[14]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7d.question-tonique.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[29]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7d.question-mediante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[29]
         .getElementsByTagName("tr")[2]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7d.question-dominante.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[29]
         .getElementsByTagName("tr")[3]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       question: document.querySelector(
         ".jeu-1 .question-answer-7d.question-sensible.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[29]
         .getElementsByTagName("tr")[4]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
   ];
process_jeu_2 = [
     {
       // 7b
       question: document.querySelector(
         ".jeu-2 .question-answer-7b.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[1].childNodes[0].data,
     },
     {
       // 7b
       question: document.querySelector(
         ".jeu-2 .question-answer-7b.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[1].childNodes[0].data,
     },

     {
       // 6b
       question: document.querySelector(
         ".jeu-2 .question-answer-6b.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[2].childNodes[0].data,
     },
     {
       // 6b
       question: document.querySelector(
         ".jeu-2 .question-answer-6b.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[2].childNodes[0].data,
     },

     {
       // 5b
       question: document.querySelector(
         ".jeu-2 .question-answer-5b.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[3].childNodes[0].data,
     },
     {
       // 5b
       question: document.querySelector(
         ".jeu-2 .question-answer-5b.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[3].childNodes[0].data,
     },

     {
       // 4b
       question: document.querySelector(
         ".jeu-2 .question-answer-4b.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[4].childNodes[0].data,
     },
     {
       // 4b
       question: document.querySelector(
         ".jeu-2 .question-answer-4b.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[4].childNodes[0].data,
     },

     {
       // 3b
       question: document.querySelector(
         ".jeu-2 .question-answer-3b.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[5].childNodes[0].data,
     },
     {
       // 3b
       question: document.querySelector(
         ".jeu-2 .question-answer-3b.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[5].childNodes[0].data,
     },

     {
       // 2b
       question: document.querySelector(
         ".jeu-2 .question-answer-2b.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[6].childNodes[0].data,
     },
     {
       // 2b
       question: document.querySelector(
         ".jeu-2 .question-answer-2b.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[6].childNodes[0].data,
     },

     {
       // 1b
       question: document.querySelector(
         ".jeu-2 .question-answer-1b.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[7].childNodes[0].data,
     },
     {
       // 1b
       question: document.querySelector(
         ".jeu-2 .question-answer-1b.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[7].childNodes[0].data,
     },

     {
       // 0
       question: document.querySelector(
         ".jeu-2 .question-answer-0.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[8].childNodes[0].data,
     },
     {
       // 0
       question: document.querySelector(
         ".jeu-2 .question-answer-0.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[8].childNodes[0].data,
     },

     {
       // 1#
       question: document.querySelector(
         ".jeu-2 .question-answer-1d.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[9].childNodes[0].data,
     },
     {
       // 1#
       question: document.querySelector(
         ".jeu-2 .question-answer-1d.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[9].childNodes[0].data,
     },

     {
       // 2#
       question: document.querySelector(
         ".jeu-2 .question-answer-2d.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[10].childNodes[0].data,
     },
     {
       // 2#
       question: document.querySelector(
         ".jeu-2 .question-answer-2d.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[10].childNodes[0].data,
     },

     {
       // 3#
       question: document.querySelector(
         ".jeu-2 .question-answer-3d.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[11].childNodes[0].data,
     },
     {
       // 3#
       question: document.querySelector(
         ".jeu-2 .question-answer-3d.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[11].childNodes[0].data,
     },

     {
       // 4#
       question: document.querySelector(
         ".jeu-2 .question-answer-4d.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[12].childNodes[0].data,
     },
     {
       // 4#
       question: document.querySelector(
         ".jeu-2 .question-answer-4d.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[12].childNodes[0].data,
     },

     {
       // 5#
       question: document.querySelector(
         ".jeu-2 .question-answer-5d.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[13].childNodes[0].data,
     },
     {
       // 5#
       question: document.querySelector(
         ".jeu-2 .question-answer-5d.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[13].childNodes[0].data,
     },

     {
       // 6#
       question: document.querySelector(
         ".jeu-2 .question-answer-6d.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[14].childNodes[0].data,
     },
     {
       // 6#
       question: document.querySelector(
         ".jeu-2 .question-answer-6d.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[14].childNodes[0].data,
     },

     {
       // 7#
       question: document.querySelector(
         ".jeu-2 .question-answer-7d.question-majeur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[15].childNodes[0].data,
     },
     {
       // 7#
       question: document.querySelector(
         ".jeu-2 .question-answer-7d.question-mineur .question"
       ).innerHTML,
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("th")[15].childNodes[0].data,
     },
   ];
process_jeu_3 = [
     {
       // 7b
       question: document.querySelector(".jeu-3 .question-answer-7b .question")
         .innerHTML,
       armature: document.querySelector(".column-7b > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[0]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[15]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 7b
       question: document.querySelector(
         ".jeu-3 .question-answer-7b.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-7b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[0]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 7b
       question: document.querySelector(
         ".jeu-3 .question-answer-7b.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-7b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[15]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 6b
       question: document.querySelector(".jeu-3 .question-answer-6b .question")
         .innerHTML,
       armature: document.querySelector(".column-6b > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[1]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[16]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 6b
       question: document.querySelector(
         ".jeu-3 .question-answer-6b.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-6b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[1]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 6b
       question: document.querySelector(
         ".jeu-3 .question-answer-6b.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-6b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[16]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 5b
       question: document.querySelector(".jeu-3 .question-answer-5b .question")
         .innerHTML,
       armature: document.querySelector(".column-5b > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[2]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[17]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 5b
       question: document.querySelector(
         ".jeu-3 .question-answer-5b.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-5b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[2]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 5b
       question: document.querySelector(
         ".jeu-3 .question-answer-5b.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-5b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[17]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 4b
       question: document.querySelector(".jeu-3 .question-answer-4b .question")
         .innerHTML,
       armature: document.querySelector(".column-4b > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[3]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[18]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 4b
       question: document.querySelector(
         ".jeu-3 .question-answer-4b.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-4b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[3]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 4b
       question: document.querySelector(
         ".jeu-3 .question-answer-4b.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-4b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[18]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 3b
       question: document.querySelector(".jeu-3 .question-answer-3b .question")
         .innerHTML,
       armature: document.querySelector(".column-3b > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[4]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[19]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 3b
       question: document.querySelector(
         ".jeu-3 .question-answer-3b.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-3b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[4]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 3b
       question: document.querySelector(
         ".jeu-3 .question-answer-3b.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-3b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[19]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 2b
       question: document.querySelector(".jeu-3 .question-answer-2b .question")
         .innerHTML,
       armature: document.querySelector(".column-2b > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[5]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[20]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 2b
       question: document.querySelector(
         ".jeu-3 .question-answer-2b.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-2b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[5]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 2b
       question: document.querySelector(
         ".jeu-3 .question-answer-2b.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-2b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[20]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 1b
       question: document.querySelector(".jeu-3 .question-answer-1b .question")
         .innerHTML,
       armature: document.querySelector(".column-1b > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[6]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[21]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 1b
       question: document.querySelector(
         ".jeu-3 .question-answer-1b.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-1b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[6]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 1b
       question: document.querySelector(
         ".jeu-3 .question-answer-1b.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-1b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[21]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 0
       question: document.querySelector(".jeu-3 .question-answer-0 .question")
         .innerHTML,
       armature: document.querySelector(".column-0 > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[7]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[22]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 0
       question: document.querySelector(
         ".jeu-3 .question-answer-0.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-1b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[7]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 0
       question: document.querySelector(
         ".jeu-3 .question-answer-0.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-1b > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[22]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 1#
       question: document.querySelector(".jeu-3 .question-answer-1d .question")
         .innerHTML,
       armature: document.querySelector(".column-1d > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[8]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         ,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[23]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 1#
       question: document.querySelector(
         ".jeu-3 .question-answer-1d.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-1d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[8]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 1#
       question: document.querySelector(
         ".jeu-3 .question-answer-1d.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-1d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[23]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 2#
       question: document.querySelector(".jeu-3 .question-answer-2d .question")
         .innerHTML,
       armature: document.querySelector(".column-2d > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[9]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[24]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 2#
       question: document.querySelector(
         ".jeu-3 .question-answer-2d.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-2d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[9]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 2#
       question: document.querySelector(
         ".jeu-3 .question-answer-2d.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-2d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[24]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 3#
       question: document.querySelector(".jeu-3 .question-answer-3d .question")
         .innerHTML,
       armature: document.querySelector(".column-3d > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[10]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[25]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 3#
       question: document.querySelector(
         ".jeu-3 .question-answer-3d.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-3d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[10]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 3#
       question: document.querySelector(
         ".jeu-3 .question-answer-3d.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-3d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[25]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 4#
       question: document.querySelector(".jeu-3 .question-answer-4d .question")
         .innerHTML,
       armature: document.querySelector(".column-4d > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[11]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[26]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 4#
       question: document.querySelector(
         ".jeu-3 .question-answer-4d.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-4d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[11]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 4#
       question: document.querySelector(
         ".jeu-3 .question-answer-4d.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-4d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[26]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 5#
       question: document.querySelector(".jeu-3 .question-answer-5d .question")
         .innerHTML,
       armature: document.querySelector(".column-5d > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[12]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[27]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 5#
       question: document.querySelector(
         ".jeu-3 .question-answer-5d.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-5d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[12]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 5#
       question: document.querySelector(
         ".jeu-3 .question-answer-5d.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-5d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[27]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 6#
       question: document.querySelector(".jeu-3 .question-answer-6d .question")
         .innerHTML,
       armature: document.querySelector(".column-6d > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[13]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[28]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 6#
       question: document.querySelector(
         ".jeu-3 .question-answer-6d.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-6d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[13]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 6#
       question: document.querySelector(
         ".jeu-3 .question-answer-6d.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-6d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[28]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },

     {
       // 7#
       question: document.querySelector(".jeu-3 .question-answer-7d .question")
         .innerHTML,
       armature: document.querySelector(".column-7d > svg"),
       validator: [
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[14]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
         document
           .querySelector("#connaissances")
           .getElementsByTagName("table")[29]
           .getElementsByTagName("tr")[1]
           .getElementsByTagName("td")[0].childNodes[0].data,
       ],
     },
     {
       // 7#
       question: document.querySelector(
         ".jeu-3 .question-answer-7d.question-majeur .question"
       ).innerHTML,
       armature: document.querySelector(".column-7d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[14]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
     {
       // 7#
       question: document.querySelector(
         ".jeu-3 .question-answer-7d.question-mineur .question"
       ).innerHTML,
       armature: document.querySelector(".column-7d > svg"),
       validator: document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[29]
         .getElementsByTagName("tr")[1]
         .getElementsByTagName("td")[0].childNodes[0].data,
     },
   ];
process_jeu_4 = [
   {
     // 7b
     question: document.querySelector(
       ".jeu-4 .question-answer-7b.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[0]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 7b
     question: document.querySelector(
       ".jeu-4 .question-answer-7b.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[15]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 6b
     question: document.querySelector(
       ".jeu-4 .question-answer-6b.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[1]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 6b
     question: document.querySelector(
       ".jeu-4 .question-answer-6b.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[16]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 5b
     question: document.querySelector(
       ".jeu-4 .question-answer-5b.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[2]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 5b
     question: document.querySelector(
       ".jeu-4 .question-answer-5b.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[17]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 4b
     question: document.querySelector(
       ".jeu-4 .question-answer-4b.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[3]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 4b
     question: document.querySelector(
       ".jeu-4 .question-answer-4b.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[18]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 3b
     question: document.querySelector(
       ".jeu-4 .question-answer-3b.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[4]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 3b
     question: document.querySelector(
       ".jeu-4 .question-answer-3b.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[19]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 2b
     question: document.querySelector(
       ".jeu-4 .question-answer-2b.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[5]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 2b
     question: document.querySelector(
       ".jeu-4 .question-answer-2b.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[20]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 1b
     question: document.querySelector(
       ".jeu-4 .question-answer-1b.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[6]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 1b
     question: document.querySelector(
       ".jeu-4 .question-answer-1b.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[21]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 0
     question: document.querySelector(
       ".jeu-4 .question-answer-0.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[7]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 0
     question: document.querySelector(
       ".jeu-4 .question-answer-0.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[22]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 1#
     question: document.querySelector(
       ".jeu-4 .question-answer-1d.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[8]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 1#
     question: document.querySelector(
       ".jeu-4 .question-answer-1d.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[23]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 2#
     question: document.querySelector(
       ".jeu-4 .question-answer-2d.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[9]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 2#
     question: document.querySelector(
       ".jeu-4 .question-answer-2d.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[24]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 3#
     question: document.querySelector(
       ".jeu-4 .question-answer-3d.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[10]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 3#
     question: document.querySelector(
       ".jeu-4 .question-answer-3d.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[25]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 4#
     question: document.querySelector(
       ".jeu-4 .question-answer-4d.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[11]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 4#
     question: document.querySelector(
       ".jeu-4 .question-answer-4d.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[26]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 5#
     question: document.querySelector(
       ".jeu-4 .question-answer-5d.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[12]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 5#
     question: document.querySelector(
       ".jeu-4 .question-answer-5d.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[27]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 6#
     question: document.querySelector(
       ".jeu-4 .question-answer-6d.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[13]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 6#
     question: document.querySelector(
       ".jeu-4 .question-answer-6d.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[28]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },

   {
     // 7#
     question: document.querySelector(
       ".jeu-4 .question-answer-7d.question-majeur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[14]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
   {
     // 7#
     question: document.querySelector(
       ".jeu-4 .question-answer-7d.question-mineur .question"
     ).innerHTML,
     validator: getEchelle(
       document
         .querySelector("#connaissances")
         .getElementsByTagName("table")[29]
         .getElementsByTagName("tr")[0]
         .getElementsByTagName("td")[0]
         .getElementsByTagName("ul")[0]
     ),
   },
 ];
});
