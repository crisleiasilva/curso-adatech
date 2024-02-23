//PROMISES
//- A promise é um objeto que guarda uma promessa de que algo será realizado.
//-É útil para os casoso em que estamos lidando com opções assíncronas.
//-A promise estará em algum dos estados abaixo:
//1. Pending: promise iniciadamas está pendente;
//2. Fullfiled: a promise foi concretizada com sucesso;
//3. Rejected: promise foi rejeitada porque houve um erro;
//Exemplo de utilização: pegar dados do back-end (API);
const fs = require("fs");


// const promessa = new Promise((resolve, reject) => {
//   fs.readFile("javascript/aula-13/arquivo.txt",(erro, conteudoDoArquivo) => {
//        if (erro) {
//          reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
//        } else {
//        resolve(String(conteudoDoArquivo));
//        }
//      });
// }) 

// promessa.then((retornoDoResolveDaPromise) => {
//     console.log('Deu certo:', retornoDoResolveDaPromise);
// }) 
//    .catch((erro) => {
//     console.log('Deu ruim:', erro);
//   }).finally(() => {
//     console.log('Isso vai ser executado, independente do sucesso ou fracasso da promessa, no final dela.')
//   });

// function lerArquivoPromise() {
//   return new Promise((resolve, reject) => {
//      fs.readFile("javascript/aula-13/arquivo.txt",(erro, conteudoDoArquivo) => {
//        if (erro) {
//           reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
//            } else {
//         resolve(String(conteudoDoArquivo));
//            }
//           });
//      }) 
// }
  
  //Async/await
async function leituraDeDados() {
  console.log('Isso é executado antes da promisse ser resolvida');

  try {
    const dadosArquivoLido = await lerArquivoPromise();// espera a promise ser resolvida para avançar o código
    console.log(dadosArquivoLido);
    console.log('Isso é executado DEPOIS da promise ser resolvida!');
  } catch(erro) {
    console.log('Isso aqui é executado depois da promessa (com erro).');
  } finally {
    console.log('dentro do finally')
  }
}

leituraDeDados();