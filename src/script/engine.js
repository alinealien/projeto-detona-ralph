// Gerenciamento de Estados

const state = {
    //Bloco que altera a visualização:
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    //Bloco que altera a valores:
    values: {
        timerId: null,
        gameVelocity: 1000

    },
};

//Quadrados aleatorios que irá sortear o inimigo
function randomSquare() {

    //limpa a classe inimiga de todos os quadrados
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    //sorteio de numero aleatório de 1 à 9
    let randomNumber = Math.floor(Math.random() * 9);
    //busca o quadrado no num sorteado
    let randomSquare = state.view.squares[randomNumber];
    //classe inimiga
    randomSquare.classList.add("enemy");
}

//Intervalo de cada tempo, onde é acionado o inimigo em movimento
function moveEnemy(){
//A cada x tempo, ele vai chamar a função randomScare para armazenar o inimigo em uma caixa temporaria
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
}



//Listener: Associação de eventos, onde ele aguarda/escuta uma ação a ser executada
function addListenerHitBox() {
    state.view.squares.forEach((square) => {});

}

// Função de inicio(tem uma função principal para chamar algumas funções iniciais):
function initialize() {

    moveEnemy();

}

initialize();