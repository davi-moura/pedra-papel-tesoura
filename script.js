let contadorJogador = 0
let contadorPc = 0
const placarUser = document.getElementById("placarUser");
const placarPc = document.getElementById("placarPc");
const result = document.getElementById("result");
const choiceBotIcon = document.getElementById("btnReiniciar");



//mostrar todas as opcoes de escolha do bot, e a q ele escolher pintar com a cor de vencer/perder/empatar

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
    // Fun��o para alterar o score
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
    var choiceUserClick = x[i].id;//pega o id
    choices(choiceUserClick);
}

function choices(choiceUserClick){
    document.getElementById(choiceUserClick).addEventListener("click", function(){
        
        //escolhas do pc
        let index = Math.floor(Math.random() * 3)
        let choices = ['pedra', 'papel', 'tesoura']
    
        var choicePC =  choices[index]
        //fim

        tratarChoices(choiceUserClick,choicePC)
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

    document.getElementById(choiceUser).style.backgroundColor = "green";
    document.getElementById("choiceBot").style.backgroundColor ="red";
    function resetaCor() {
        document.getElementById(choiceUser).style.backgroundColor = "white";
        document.getElementById("choiceBot").style.backgroundColor ="white";
    }
    setTimeout(resetaCor, 500);
}

function loseUser(choiceUser,choicePC){

    result.innerHTML = choiceUser.toUpperCase() + " perde para " + choicePC.toUpperCase() + ": Vc perdeu!!"
    contadorPc++
    viewChoicePC(choicePC)
    alterarScore()

    document.getElementById(choiceUser).style.backgroundColor = "red";
    document.getElementById("choiceBot").style.backgroundColor = "green";
    function resetaCor() {
        document.getElementById(choiceUser).style.backgroundColor = "white";
        document.getElementById("choiceBot").style.backgroundColor = "white";
    }
    setTimeout(resetaCor, 500);
}

function empate(choiceUser,choicePC){

    result.innerHTML = choiceUser.toUpperCase() + " empata com " + choicePC.toUpperCase() + ": Empate!"
    viewChoicePC(choicePC)

    document.getElementById(choiceUser).style.backgroundColor = "yellow";
    document.getElementById("choiceBot").style.backgroundColor = "yellow";
    function resetaCor() {
        document.getElementById(choiceUser).style.backgroundColor = "white";
        document.getElementById("choiceBot").style.backgroundColor = "white";
    }
    setTimeout(resetaCor, 500);

}