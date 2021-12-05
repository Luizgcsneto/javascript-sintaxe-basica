function calculadora(){
    const operacao = Number(prompt('escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - divisão (/)\n 5 - Potencialização (**)'))

    let num1 = Number(prompt('escolha o primeiro numero'))
    let num2 = Number(prompt('escolha o segundo numero'))
    let resultado

    function soma(){
        resultado = num1 + num2
        alert(`${num1} + ${num2} = ${resultado}`)
        novaOperacao()
    }

    function subtracao(){
        resultado = num1 - num2
        alert(`${num1} - ${num2} = ${resultado}`)
        novaOperacao()
    }

    function multiplicacao(){
        resultado = num1 * num2
        alert(`${num1} X ${num2} = ${resultado}`)
        novaOperacao()
    }

    function divisao(){
        resultado = num1 / num2
        alert(`${num1} / ${num2} = ${resultado}`)
        novaOperacao()
    }

    function potenciacao(){
        resultado = num1 ** num2
        alert(`${num1} elevado a ${num2}º = ${resultado}`)
        novaOperacao()
    }

    if(operacao === 1){
        soma()
    } else if( operacao === 2){
        subtracao()
    }
    else if( operacao === 3){
        multiplicacao()
    }
    else if( operacao === 4){
        divisao()
    }
    else if( operacao === 5){
        potenciacao()
    }
    
    function novaOperacao(){
        let opcao = Number(prompt('deseja fazer uma nova operacao ? \n 1 - Sim \n 2 - Não'))

        if(opcao === 1){
            calculadora()
        } else if(opcao === 2){
            alert('até mais')
        } else {
            alert('erro digite uma opção válida')
            novaOperacao()
        }
}
}

calculadora()


