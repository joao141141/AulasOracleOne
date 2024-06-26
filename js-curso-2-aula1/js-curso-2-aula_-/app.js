let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
listaDeNumerosSorteados = [];



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}


exibirTextoNaTela("h1", "Joojin");
exibirTextoNaTela("p", "Escolha um numero entre 1 e 100!");


function verificarChute() {
    let chute = document.querySelector("input").value;


    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o numero secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', "Acertou!");
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', "Errou!");
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Joojin');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100!');

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }


}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}