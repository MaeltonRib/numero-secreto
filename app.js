let listaDeNumeros = [];
let limiteMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.3});
}

function mensagemInicial() {
    exibirTextoNaTela("h1", "SecretGame");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
mensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value
    if (chute == numeroSecreto) { 
        exibirTextoNaTela("h1", "Acertou!")
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela("p", `${mensagemTentativa}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número é menor")
        } else{
            exibirTextoNaTela("p","O número é maior")
        }
        tentativas++;
        limparCampo()
    } 
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteMaximo + 1)
    let quantidadeDeElementos = listaDeNumeros.length;
    if (quantidadeDeElementos == limiteMaximo) {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    }  else {
        listaDeNumeros.push(numeroEscolhido)
        console.log(listaDeNumeros)
        return numeroEscolhido
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
reiniciarJogo()