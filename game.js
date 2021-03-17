
textIn  = document.getElementById("input-textbox");
textOut = document.getElementById("output-textbox");
inData = document.getElementById("data").childNodes;
builtData = []
curGame = null


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
      curGame = new Game1()
      break;
    case 2:
      textOut.value += "2" + "\n";
      curGame = new Game2()
      break;
    case 3:
      textOut.value += "3" + "\n";
      curGame = new Game3()
      break;
    case 4:
      textOut.value += "4" + "\n";
      curGame = new Game4()
      break;

  }
}
function setUp(){
  var txt = ""
  var i
  for (i = 0; i < data.length; i++) {
      if(data[i].innerHTML){
        txt = txt + data[i].innerHTML;
      }
    }
  textOut.value += txt
}

class Modes{
  constructor(echelle,tonique,mediante,dominante,sensible){
    this.echelle = echelle
    this.tonique = tonique
    this.mediante = mediante
    this.dominante = dominante
    this.sensible = sensible
  }

}


class Majeur{
    cons

}


class Game {
    constructor(){}
    checkAnswer(answer){}
    getNextQuestion(){}
}

class Game1 extends Game{}
class Game2 extends Game{}
class Game3 extends Game{}
class Game4 extends Game{}
