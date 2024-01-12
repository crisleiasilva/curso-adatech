const prompt = require('readline-sync')
let i ;

//expressao 1: inicialização da variável de controle
//expressao 2: condição que defini quando irá ocorrer a parada do for
//expressao 3: incremento da variavel de controle

//for(expressao 1; expressao 2; expressao 3) {
  // O escopo do for
//}

for(i=0; i < 5; i++) {
  console.log(i)
}
//limpa tudo que foi executado antes
console.clear()

//Exemplo 2

// let maiorNumero = 0
// let numeroInformado

// for(let i =0; i < 5; i++) {
//   numeroInformado = Number (prompt.question('Informe um numero positivo:'))

//   if(numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado
//   }
// }
// console.log('Maior número:', maiorNumero)

//Exemplo 3 - Percorrendo strings com for

const nome = 'Crislei'


for(let i = 0; i < nome.length; i++) {
console.log(nome[i])

//if(i === 4) break
}
console.clear()

//Arrays

const notaDosAlunos = [10, 8, 5]
const pessoa = ['Crislei', 41 , 1.70 ,true]

console.log(notaDosAlunos)
console.log(pessoa)

pessoa[3] = false // consigo alterar o elemento 3 desta array
console.log(pessoa)

console.clear()
console.log(pessoa.length)