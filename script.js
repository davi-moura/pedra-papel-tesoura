let contadorJogador = 0
let contadorPc = 0
const placarUser = document.getElementById("placarUser");
const placarPc = document.getElementById("placarPc");
const result = document.getElementById("result");
const choiceBotIcon = document.getElementById("btnReiniciar");





//criar function para colorir a borda do botao pra caso o cara ganhe ou perca


//mostrar todas as opcoes de escolha do bot, e a q ele escolher pintar de verde, e pintar a borda dele se ele ganhou ou n

//colocar titulo de quem é quem em cima das bordas da div, pra dizer quem é o user e quem é o comp


function viewChoicePC(choicePC) {

    switch (choicePC) {
        case "pedra":
            var nova = "fa fa-hand-rock-o"
            break;
        case "tesoura":
            var nova = "fa fa-hand-scissors-o"
            break;
        case "papel":
            var nova = "fa fa-hand-paper-o"
            break;
    
        default:
            var nova = "fa fa-question-circle"
            break;
    }

    document.getElementById("choiceBotIcon").classList.value = nova
}


function alterarScore(){
    // Função para alterar o score
    placarUser.innerHTML = `${contadorJogador}`
    placarPc.innerHTML = `${contadorPc}`

    if(contadorJogador || contadorPc){
        choiceBotIcon.style.display = 'initial';
    }
}

function limpaScore(){
    contadorJogador = 0
    contadorPc = 0
    placarUser.innerHTML = 0
    placarPc.innerHTML = 0
    result.innerHTML = "Pedra, Papel ou Tesoura?"
    choiceBotIcon.style.display = 'none';
    viewChoicePC()
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

    result.innerHTML = choiceUser.toUpperCase() + " ganha de " + choicePC.toUpperCase() + ": Vc ganhou!!"
    contadorJogador++
    viewChoicePC(choicePC)
    alterarScore()

}

function loseUser(choiceUser,choicePC){

    result.innerHTML = choiceUser.toUpperCase() + " perde para " + choicePC.toUpperCase() + ": Vc perdeu!!"
    contadorPc++
    viewChoicePC(choicePC)
    alterarScore()
}

function empate(choiceUser,choicePC){

    result.innerHTML = choiceUser .toUpperCase()+ " empata com " + choicePC.toUpperCase() + ": Empate!"
    viewChoicePC(choicePC)

}