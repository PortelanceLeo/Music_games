
textIn  = document.getElementById("input-textbox");
textOut = document.getElementById("output-textbox");
inData = document.getElementById("data").childNodes;
majeurArr = []
minorArr = []


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
      //curGame = new Game1();
      break;
    case 2:
      textOut.value += "2" + "\n";
      //curGame = new Game2();
      break;
    case 3:
      textOut.value += "3" + "\n";
      //curGame = new Game3();
      break;
    case 4:
      textOut.value += "4" + "\n";
      //curGame = new Game4();
      break;

  }
}
function test(){
  var txt = "";

  for (var i = 0; i < inData.length; i++) {
      if(inData[i].id == "majeur"){
        majData = inData[i].childNodes[1].childNodes
        textOut.value += "majeur" + "\n"
        id = majData[1].innerHTML
        textOut.value += id + "\n"
        majeur = new Majeur(id,majData)
        majeurArr.push(majeur)
      }
      if(inData[i].id == "mineur"){
        minData = inData[i].childNodes[1].childNodes
        textOut.value += "minor" + "\n"
        id = minData[1].innerHTML
        textOut.value += id + "\n"
        naturalData = minData[3].childNodes[1].childNodes;
        harmoniqueData = minData[5].childNodes[1].childNodes
        mineur = new Mineur(id,naturalData,harmoniqueData)
        minorArr.push
      }

  }

}

/*<ul id = "majeur">
  <li id = "id"><li>
  <li
</ul>*/
class Mode{
  constructor(data){
    for (var i = 0; i < data.length; i++){
      switch(data[i].id)
      {
        case "tonique":
          this.tonique = data[i].innerHTML;
          textOut.value += data[i].innerHTML + "\n"
          break;
        case "mediante":
          this.mediante = data[i].innerHTML;
          textOut.value += data[i].innerHTML + "\n"
          break;
        case "dominante":
          this.dominante = data[i].innerHTML;
          textOut.value += data[i].innerHTML + "\n"
          break;
        case "sensible":
          this.sensible = data[i].innerHTML;
          textOut.value += data[i].innerHTML + "\n"
          break;
        case "echelle":
          this.echelle = data[i].innerHTML;
          textOut.value += data[i].innerHTML + "\n"
          break;
      }
    }
  }
}




class Majeur{
    constructor(id,data){
      this.id = id;
      this.mode = new Mode(data);
    }
}

class Mineur{
  constructor(id,naturel,harmonique){
    this.id = id;
    this.naturel = new Mode(naturel);
    this.harmonique = new Mode(harmonique);
  }

}

/*
class Game {
    constructor(){}
    checkAnswer(answer){}
    getNextQuestion(){}
}

class Game1 extends Game{}
class Game2 extends Game{}
class Game3 extends Game{}
class Game4 extends Game{}
*/
