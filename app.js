let numerosSorteados = [];
let limiteDeNumeros = 9;
let tentativas = 1;

let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} tentativas`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        limparCampo();
        tentativas++;
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`)
        } else {
            exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`)
        }
    }
    // chute == numeroSecreto ? () => {
    //     exibirTextoNaTela('h1', 'Acertou!');
    //     exibirTextoNaTela('p', 'Você descobriu o número secreto');
    // } : () => {
    //     chute > numeroSecreto ? exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`) :
    //         exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`)
    // };

}




function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.round(Math.random() * limiteDeNumeros) + 1;

    if (numerosSorteados.length == limiteDeNumeros) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    document.querySelector('input').value = ('')
}

function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}










