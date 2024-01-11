
const prompt = require('readline-sync')

// //let saldo = Number (prompt.question("Qual eh o seu saldo?"))

// //while(saldo < 0) {
//  //saldo = Number (prompt.question('Saldo invalido! Por favor, informe novamente:'))
// //}
// //
// //console.log(saldo)
// //Exemplo 2
// let notaDoAluno = Number(prompt.question('Informe a nota do aluno:'))

// let somaDasNotas = 0 //Acumulador
// let qtdNotasValidas = 0 //Acumulador com qti de notas válidas

// while(notaDoAluno >= 0) {
//   somaDasNotas += notaDoAluno  //Incremento acumulador(somadasNotas)
//   qtdNotasValidas ++

//   notaDoAluno = Number(prompt.question ('Informe a próxima nota:'))
// }
// console.log(somaDasNotas)
// console.log(qtdNotasValidas)

// console.log('Media das notas dos alunos =', somaDasNotas / qtdNotasValidas)

//Exemplo 3

// const numeroAleatorio = parseInt(Math.random() * 10)

// let qtiTentativas = 0

// let numeroDoUsuario = Number (prompt.question('Informe um numero entre 0 e 10'))



// while(numeroAleatorio!== numeroDoUsuario) {
//   console.log('Você errou! Tente novamente...')
//   numeroDoUsuario = Number(prompt.question('Informe um numero de 0 a 10'))
//   qtiTentativas++
// }
//  console.log('PARABENS! Você acertou! o numero era', numeroAleatorio)
//  console.log('Você acertou depois de', qtiTentativas , 'tentativas')

 //Loop com contador

//  let contador = 0

//  while(contador < 5) {
//   console.log(contador)

//   if(contador === 2){
//     break
//   }
  
//   contador++
//  }

//* Do-While

let saldo 

do {
  saldo = Number(prompt.question("Informe um saldo válido:"))
} while(saldo < 0) 

console.log(saldo)
