const prompt = require('readline-sync')
const idade = Number (prompt.question('Qual eh a sua idade?'))

const ehMaiorDeIdade = idade >=18
if(ehMaiorDeIdade) {
 console.log('Você eh maior de idade!') 
}else {
 console.log('Você eh menor de idade!') 
}

const mediaDoAluno = 8
//Media >= 7 Aprovado
//Media < 7 e Media >= 5 Prova Final
//Media < 5 Reprovado

if(mediaDoAluno >= 7){
  console.log('Aprovado!')
  console.log('Parabens!!!!')
}else if ( mediaDoAluno >=5) {
  console.log('Prova Final')
}else {
  console.log('Reprovado')
}

//Habilitação:
//Preciso ser maior de idade
//Preciso ter CNH

const idadePessoa = 15
const temCNH = true 
if (idadePessoa >=18 && temCNH) {
  console.log('Você pode dirigir!')
}else {
  console.log('Você não pode dirigir!')
}