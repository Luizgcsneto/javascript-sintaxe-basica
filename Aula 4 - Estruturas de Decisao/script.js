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

let array = ['valor1','valor2','valor3','valor4','valor5']

for(let indice = 0; indice < array.length; indice++){
    console.log('valores do array',array[indice])
}

let object = {
    propriedade1: 'propriedade1',
    propriedade2: 'propriedade2',
    propriedade3: 'propriedade3',
    propriedade4: 'propriedade4',
}

console.table(object)
console.log('usando o for IN')
for(let i in object){
    console.log(i)
}
console.log('---------------')
console.log('usando o for OF')
for(i of array){
    console.log(i)
}