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