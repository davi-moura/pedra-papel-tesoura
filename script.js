let contadorJogador = 0
let contadorPc = 0
const placarUser = document.getElementById("placarUser");
const placarPc = document.getElementById("placarPc");
const result = document.getElementById("result");

function alterarScore(){
    // Função para alterar o score
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

            empate(choiceUser,choicePC)

        }

    }
    else if (choiceUser == "tesoura") {
        if (choicePC == "pedra") {

            loseUser(choiceUser,choicePC)

        } else if (choicePC == "papel"){

            winUser(choiceUser,choicePC)

        } else if (choicePC == "tesoura") {

            empate(choiceUser,choicePC)

        }
    }

    else if (choiceUser == "papel"){
        if (choicePC == "pedra") {

            winUser(choiceUser,choicePC)

        }else if (choicePC == "tesoura") {

            loseUser(choiceUser,choicePC)

        }else if (choicePC == "papel")  {

            empate(choiceUser,choicePC)

        }

    }

}

function winUser(choiceUser,choicePC){

    result.innerHTML = choiceUser.toUpperCase() + " ganha de " + choicePC.toUpperCase() + ": Você ganhou!!"
    contadorJogador++
    alterarScore()

}

function loseUser(choiceUser,choicePC){

    result.innerHTML = choiceUser.toUpperCase() + " perde para " + choicePC.toUpperCase() + ": Você perdeu!!"
    contadorPc++
    alterarScore()
}

function empate(choiceUser,choicePC){

    result.innerHTML = choiceUser .toUpperCase()+ " empata com " + choicePC.toUpperCase() + ": Empate!"

}