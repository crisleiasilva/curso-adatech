//reduce : metodo que executa (para cada elemento do array) a função que foi passada como parâmetro, resultando em um elemento único.

// const numeros = [1,2 ,3 ,4 ,5];

// const soma = numeros.reduce((acumulador, elemento, index, arrayCompleto) => {
//   return elemento + acumulador;
// }, 0);

// console.log(soma);

// const numeros = [1,2 ,3 ,4 ,5];

// const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
//   return elemento / arrayCompleto.length + acumulador;
// }, 0);

// console.log(media);const numeros = [1,2 ,3 ,4 ,5];

const numeros = [1,2,3,4,5]
const somaDosPares = numeros.reduce((acumulador,numero) => {
  //se o numero for par
  if(numero % 2 ===0) {
    return numero + acumulador;  
  }else {
    return acumulador;
  }
} ,0);

console.log(somaDosPares);

//Total a pagar do carrinho
console.clear();

const carrinho = [
  {produto:'Feijão',preco:7.98, quantidade: 3},
  {produto:'Arroz', preco:4.98, quantidade: 5},
  {produto:'Leite', preco:6.99, quantidade: 2},
];

const totalAPagar = carrinho.reduce((acumulador, item) => {
    return item.preco * item.quantidade + acumulador
}, 0); 

console.log(totalAPagar);