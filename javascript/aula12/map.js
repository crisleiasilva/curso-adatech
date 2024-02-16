// Map : Ele cria um novo array com o mesmo tamanho do original, composto pelos elementos que foram retornados a cada interação.

const numero = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numero.map((elemento, index, arrayCompleto) => {
 return elemento * 2;
});

console.log(novoArray);

//Exemplo 1: Elevando todos os números ao quadrado
console.clear();

const valores = [39, 4, 32, 24, 4, 22, 2, 49, 23,8];

const valoresAoQuadrado = valores.map((valor) => valor **2);

console.log(valoresAoQuadrado);

//Exemplo 2: Adicionando uam propriedade aos objetos do array
console.clear();
const carrinho = [
  { produto: 'Feijão', preco: 7.98, quantidade: 3},
  { produto:'Arroz', preco: 4.98, quantidade: 5},
  { produto: 'Leite 1L', preco: 6.99, quantidade: 2},
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total:itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoComTotal);



