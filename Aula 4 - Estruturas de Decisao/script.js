var jogador1 = 0
var jogador2 = 0
var placar

jogador1 != -1 && jogador2 != -1 ? console.log("jogadores válidos") : console.log("jogadores inválidos");

if(jogador1 > 0 && jogador2 === 0){
    console.log('jogador1 fez 1 ponto')
    placar = jogador1 > jogador2
} else if (jogador2 > 0 && jogador1 === 0){
    console.log('jogador2 fez 1 ponto')
    placar = jogador2 > jogador1
} else {
    console.log('ninguém marcou ponto')
}
switch(placar){
    case placar = jogador1 > jogador2:
        console.log("jogador1 venceu")
    break
    case placar = jogador2 > jogador1:
        console.log("jogador2 venceu")
    break
    default:
        console.log('ninguém ganhou')
}