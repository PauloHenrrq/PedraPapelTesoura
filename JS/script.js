const opcoes = {
    1 : { nome: 'pedra', img: 'IMAGENS/pedra.png', pedra: 'EMPATE', papel: 'PERDEU', tesoura: 'GANHOU'},
    2 : { nome: 'papel', img: 'IMAGENS/papel.png', pedra: 'GANHOU', papel: 'EMPATE', tesoura: 'PERDEU'},
    3 : { nome: 'tesoura', img: 'IMAGENS/tesoura.png', pedra: 'PERDEU', papel: 'GANHOU', tesoura: 'EMPATE'}
}

let escolhaJogador = {}
let escolhaComputador = {}

function escolherJogada(num) {
    escolhaJogador = opcoes[num]
}

let numComputador = math.random((math.random()*3)+1)
escolhaComputador = opcoes[numComputador]

