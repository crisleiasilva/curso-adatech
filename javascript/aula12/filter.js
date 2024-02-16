//Filter : sempre retorna uma array de tamanho igual ou inferior ao tamanho do array original.

//Map : sempre retorna um array de mesmo tamanho do array original;

const valores = [39,45 ,32, 24, 4, 22, 2, 49, 23, 8];

const pares = valores.filter((valor) => valor % 2 === 0) 

console.log(pares);

//Exemplo 1
console.clear();

const alunos = [
  {nome:'Quincy', media: 96},
  {nome:'Jason', media:84},
  {nome:'Alexis', media:100},
  {nome:'Sam', media:65},
  {nome:'Katy', media:90}
];

const alunosComMediaSuperiorA85 = alunos.filter((alunos) => alunos.media > 85);

console.log(alunosComMediaSuperiorA85);


//Exemplo 2 
console.clear();

const produtos = [
  {nome:'Suco de Laranja', preco:7.50, tipo:'Bebida'},
  {nome:'Batata Frita', preco:10.50, tipo:'Comida'},
  {nome:'Pizza', preco:12.49, tipo: 'Comida'},
  {nome:'Chocolate', preco:1.50, tipo:'Comida'},
  {nome:'Pastel', preco:4.50 , tipo:'Comida'},
  {nome:'Coca', preco:6.99 , tipo:'Bebida'},
];

const produtosFiltrados = produtos.filter((produto) => produto.preco < 10 && produto.tipo !== 'Bebida');

console.log(produtosFiltrados);