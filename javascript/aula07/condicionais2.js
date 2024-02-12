//Util quando sua variavel possui valores específicos

const permissoes = 'admin' // 'aluno' || 'professor' || 'admin'

switch(permissoes) {
  case 'aluno':
    console.log ('Você só pode acessar as aulas')
    break
  case 'professor':
    console.log('Você pode alterar as aulas e adicionar exercícios')
    break 
  case 'admin':
    console.log('Você pode fazer o que quiser no sistema') 
    break
  default :
  console.log('Não identificado')
  
}