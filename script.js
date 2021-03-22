
textIn  = document.getElementById("input-textbox");
textOut = document.getElementById("output-textbox");
inData = document.getElementById("data")
majeurArr = [];
mineurArr = [];
curGame = null;
answerType = "dom"



function process(input) {
    if (input == "hi") { return "Hi to you too, player."; }
    else if (input == "exit") { return "No."; }
}

function go() {
    var input = textIn.value;
    textIn.value = "";
    var output = process(input);
    textOut.value += output + "\n";
}

function selectGame(gameId){
  switch(gameId){
    case 1:
      textOut.value += "1" + "\n";
      curGame = new Game1();
      break;
    case 2:
      textOut.value += "2" + "\n";
      curGame = new Game2();
      break;
    case 3:
      textOut.value += "3" + "\n";
      curGame = new Game3();
      break;
    case 4:
      textOut.value += "4" + "\n";
      curGame = new Game4();
      break;
  }
  curGame.getNextQuestion()
}
function getData(){
  inNodes = inData.childNodes
  for (var i = 0; i < inNodes .length; i++) {
      if(inNodes[i].id == "majeur"){
        majData = inNodes[i].childNodes[1].childNodes
        id = majData[1].innerHTML
        majeur = new Majeur(id,majData)
        majeurArr.push(majeur)
      }
      if(inNodes[i].id == "mineur"){
        minData = inNodes[i].childNodes[1].childNodes
        id = minData[1].innerHTML
        naturalData = minData[3].childNodes[1].childNodes;
        harmoniqueData = minData[5].childNodes[1].childNodes
        mineur = new Mineur(id,naturalData,harmoniqueData)
        mineurArr.push(mineur)
      }


  }
  inData.innerHTML = ""

}
function getRandMajeur(){
  return majeurArr[Math.floor(Math.random() * majeurArr.length)]
}

function getRandMineur(){
  return mineurArr[Math.floor(Math.random() * mineurArr.length)]
}

class Mode{
  constructor(data){
    for (var i = 0; i < data.length; i++){
      switch(data[i].id)
      {
        case "tonique":
          this.tonique = data[i].innerHTML;

          break;
        case "mediante":
          this.mediante = data[i].innerHTML;

          break;
        case "dominante":
          this.dominante = data[i].innerHTML;

          break;
        case "sensible":
          this.sensible = data[i].innerHTML;

          break;
        case "echelle":
          this.echelle = data[i].innerHTML;

          break;
      }
    }
  }
  compare(mode){
    isToniqueSame = this.tonique == mode.tonique;
    isSensibleSame = this.sensible == mode.sensible;
    isDominanteSame = this.dominante == mode.dominante;
    isEchelleSame = this.echelle == mode.echelle;
    isMedianteSame =this.mediante == mode.mediante;
    return isMedianteSame && isEchelleSame && isDominanteSame && isSensibleSame && isToniqueSame

  }
}




class Majeur{
    constructor(id,data){
      this.id = id;
      this.mode = new Mode(data);
    }
    compare(majeur){
      if(this.id == majeur.id){
        return this.mode.compare(majeur.mode)
      }
    }
}

class Mineur{
  constructor(id,naturel,harmonique){
    this.id = id;
    this.naturel = new Mode(naturel);
    this.harmonique = new Mode(harmonique);
  }
  compare(mineur){
    if(this.id == mineur.id){
      return this.natural.compare(mineur.natural) && this.harmonique.compare(mineur.harmonique)
    }

  }
}
class Game {
    constructor(){
      this.testCount = 0;
      this.score = 0;
    }
    checkAnswer(){
      if(answerType == "test"){
          var answer = textIn.value
          console.log(answer)
          if(this.answer == answer){
            textOut.value += "Bonne reponse\n";
            this.score += 1;
            console.log("yyuea")
            else{
            textOut.value += "Mauvaise reponse, la bonne reponse est {}\n".replace("{}",this.answer)
            console.log("yfds")
            textIn.value = ""
            }
      elif(answerType == "vex"){.....}
      else{.....}
      }
      
      }
      textIn.value = ""
      this.getNextQuestion()

    }
    getNextQuestion(){}
}

class Game1 extends Game{
  constructor(){
    super()
  }
  getNextQuestion(){
    this.testCount += 1;
    this.curData = getRandMajeur();
    this.answer = this.curData.mode.mediante;
    var questionTemplate = "\nQuel est la mediante de la clé majeur {} ?\n".replace("{}",this.curData.id);
    textOut.value += questionTemplate + "\n";
  }
}
class Game2 extends Game{
  constructor(){
    super()
  }
}
class Game3 extends Game{
  constructor(){
    super()
  }
}
class Game4 extends Game{
  constructor(){
    super()
  }
}
