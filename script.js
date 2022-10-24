let contadorJogador = 0
let contadorPc = 0
const placarUser = document.getElementById("placarUser");
const placarPc = document.getElementById("placarPc");

function alterarScore(){
    // Fun��o para alterar o score
    placarUser.innerHTML = `${contadorJogador}`
    placarPc.innerHTML = `${contadorPc}`
}
function limpaScore(){
    contadorJogador = 0
    contadorPc = 0
    placarUser.innerHTML = 0
    placarPc.innerHTML = 0
}

//Busca todos os elementos da classe 'btn'
var x = document.getElementsByClassName('btn');

for (i = 0; i < x.length; i++){
    var choiceUser = x[i].id;//pega o id
    choices(choiceUser);
}


function choices(choiceUser){
    document.getElementById(choiceUser).addEventListener("click", function(){
        
        //escolhas do pc
        let index = Math.floor(Math.random() * 3)
        let choices = ['pedra', 'papel', 'tesoura']
    
        var choicePC =  choices[index]
        //fim

        tratarChoices(choiceUser,choicePC)
    });
}

function tratarChoices(choiceUser,choicePC){


    if (choiceUser == "pedra") {
        if (choicePC == "tesoura") {

            winUser(choiceUser,choicePC)

        } else if (choicePC == "papel"){

            loseUser(choiceUser,choicePC)
           
        } else if (choicePC == "pedra") {

            empate()

        }

    }
    else if (choiceUser == "tesoura") {
        if (choicePC == "pedra") {

            loseUser(choiceUser,choicePC)

        } else if (choicePC == "papel"){

            winUser(choiceUser,choicePC)

        } else if (choicePC == "tesoura") {

            empate()

        }
    }

    else if (choiceUser == "papel"){
        if (choicePC == "pedra") {

            winUser(choiceUser,choicePC)

        }else if (choicePC == "tesoura") {

            loseUser(choiceUser,choicePC)

        }else if (choicePC == "papel")  {

            empate()

        }

    }

    console.log(choiceUser)
    console.log(choicePC)
}

function winUser(choiceUser,choicePC){

    contadorJogador++
    alterarScore()
    console.log(choiceUser + " ganha " + choicePC)
}

function loseUser(choiceUser,choicePC){

    console.log(choiceUser + " perde " + choicePC)
    contadorPc++
    alterarScore()
}

function empate(){
    console.log("empate")
}