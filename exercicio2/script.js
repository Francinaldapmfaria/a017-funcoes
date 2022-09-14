// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas 
// entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const somaNumerosFuncao = (num1, num2) => {
    const soma =num1+num2
    console.log(soma)
    return soma
}
const somaP = somaNumerosFuncao(1,2)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número 
// é **maior ou igual** ao segundo.

function doisNumeros(num1,num2){
    console.log(Boolean(num1>= num2))
}
doisNumeros(8,6)
doisNumeros(5,5)
doisNumeros (2,6)



// c) Uma função que receba um número e imprima se ele é par ou não

function par(num){
    console.log("resultado da C", num%2 ===0)
}
par(5)
par(4)

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
// juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensagem(string){
    console.log(`Quantidade de letras da plavra: ${string.length}. ${string.toUpperCase()}`)
    // // console.log(string.toUpperCase())
}
mensagem("Batatinha quando nasce")