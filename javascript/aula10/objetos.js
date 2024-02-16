// Object Literal

const array = ['Miguel', 10, 1.65,true]

const pessoa = {
nome:'Miguel',
idade:10, 
altura:1.65, 
ehProgramador:true,
hobbies: ['Ver Séries','Estudar Programacao', 'Ler'], 
}
console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa['idade']);

pessoa.profissao = 'Desenvolvedor';

console.log(pessoa);

delete pessoa.altura;