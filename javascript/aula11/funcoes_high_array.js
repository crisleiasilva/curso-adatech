// Funções de Alta Ordem de Arrays

//1. Array.forEach()

const numeros = [40, 34, 67, 89, 23, 10];

numeros.forEach((item, index, arrayCompleto) => {
    console.log(index, item, arrayCompleto);
});

console.clear();

//2. Array.find() - util para encontrar um elemento no array

const encontrado = numeros.find((numero) => {
    return numero < 20 && numero > 10;
});

console.log(encontrado);

console.clear();

//Array de Objetos
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

const pessoaEncontrada = pessoa.find((pessoa) => pessoa.idade > 40 && pessoa.altura > 1.60);

console.log(pessoaEncontrada);


//3. Array.findIndex() muito pareciso com o find porém retorna indice do elemento.

const indiceDaPessoaEncontrada = pessoa.findIndex((pessoa) => pessoa.idade > 40 && pessoa.altura > 1.60);

console.clear();
console.log(indiceDaPessoaEncontrada);

