function calculadora(){
    const operacao = Number(prompt('escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - divisão (/)'))

    let num1 = Number(prompt('escolha o primeiro numero'))
    let num2 = Number(prompt('escolha o segundo numero'))
    let resultado

    function soma(){
        resultado = num1 + num2
        alert(`${num1} + ${num2} = ${resultado}`)
    }

    function subtracao(){
        resultado = num1 - num2
        alert(`${num1} - ${num2} = ${resultado}`)
    }
    function multiplicacao(){
        resultado = num1 * num2
        alert(`${num1} X ${num2} = ${resultado}`)
    }
    function divisao(){
        resultado = num1 / num2
        alert(`${num1} / ${num2} = ${resultado}`)
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
}

calculadora()


