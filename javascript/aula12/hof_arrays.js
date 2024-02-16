//Array.every : verifica se todos os elementos da array respeitam ou seguem uma determinada condição retornada pela função.

const numeros = [40,34,67,89,23,16,10];

const pessoa = [
  {
      nome: 'Pessoa 1',
      idade: 30,
      altura: 1.78,
  }, 
  {
      nome:'Pessoa 2',
      idade: 45,
      altura: 1.65,
  },
  {
      nome:'Pessoa 3',
      idade: 28,
      altura: 1.98
  },
];


const todosPositivos = numeros.every((elemento) => elemento > 0)

console.log(todosPositivos);

const todosMaioresDeIdade = pessoa.every((pessoa) => pessoa.idade > 18 && pessoa.altura > 1.40);

console.log(todosMaioresDeIdade);

//some : verifica se algum elemento do array torna verdadeira uma determinada consição retornada pela função.

console.clear();
const numero2 = [-1, 3, 7, -3, 5];

const retorno = numero2.some((numero) => numero > 0);

console.log(retorno);


