const fs = require("fs");

// 1. Callbacks
// console.log('Antes de ler o arquivo');
// Função assíncrona (ler um arquivo leva um tempo)
// fs.readFile("javascript/aula-13/arquivo.txt",(erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
//   } else {
//   console.log(String(conteudoDoArquivo));
//   }
// });

// console.log('Depois da função de  ler o arquivo');


//Exemplo 2 : setTimeout() função que cria um timer

setTimeout(() => {
  console.log('Isso aqui vai ser executada após 2 segundos!');
}, 2 * 1000)

console.log('Depoi do setTimeout');