// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function meuNome (nome) {
//     console.log(`Olá, ${nome}`)
    
// }

// meuNome("Fran")

// // b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function imprimirTabuada(valor){
//     for(i= 0; i <= 10; i++){
//         let tabuada = valor * i
//         console.log(tabuada)
//     }
// }
//     imprimirTabuada(6)


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 


const meuNome =  (nome)  => {
    console.log(`Olá, ${nome}`)
    
}

 meuNome("Fran")

  const imprimirTabuada = (valor) => {
     for(i= 0; i <= 10; i++){
         let tabuada = valor * i
         console.log(tabuada)
     }
 }
     imprimirTabuada(6)

