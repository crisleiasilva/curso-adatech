let notaDoAluno = Number(prompt.question('Informe a nota do aluno:'))

let somaDasNotas = 0 //Acumulador

while(notaDoAluno >= 0) {
  somaDasNotas = somaDasNotas + notaDoAluno
  notaDoAluno = Number(prompt.question ('Informe a próxima nota'))
}
console.log(somaDasNotas)