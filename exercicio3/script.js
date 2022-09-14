// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas 
// (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, imprima no console o resultado das operações

function soma(num1,num2){
    return num1 + num2
}

function subtracao(num1, num2){
    return num1 - num2
}

function divisao(num1, num2){
    return num1 / num2
}
function multiplicacao (num1, num2){
    return num1 * num2
}

let numero1 = Number(prompt("Digite um número!"))
let numero2 = Number(prompt("Digite um número!"))

console.log(`${numero1} + ${numero2} = ${soma(numero1,numero2)}`)
console.log(`${numero1} - ${numero2} = ${subtracao(numero1,numero2)}`)
console.log(`${numero1} / ${numero2} = ${divisao(numero1,numero2)}`)
console.log(`${numero1} * ${numero2} = ${multiplicacao(numero1,numero2)}`)