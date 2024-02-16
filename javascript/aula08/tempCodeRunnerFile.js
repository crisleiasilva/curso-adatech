let somaDasNotas = 0 ;//Acumulador
 let qtdNotasValidas = 0; //Acumulador com qti de notas válidas

 while(notaDoAluno >= 0) {
   somaDasNotas += notaDoAluno;  //Incremento acumulador(somadasNotas)
 qtdNotasValidas ++

  notaDoAluno = Number(prompt.question ('Informe a próxima nota:'));
 }
 console.log(somaDasNotas);
 console.log(qtdNotasValidas);

 console.log('Media das notas dos alunos =', somaDasNotas / qtdNotasValidas);