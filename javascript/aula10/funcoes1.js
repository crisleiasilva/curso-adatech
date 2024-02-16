//Definiçãp da função mas não a utilizou é preciso chamar a função.
function saudacao(nomeDoAluno,curso="Front-end em React") {
   return `Olá, ${nomeDoAluno}!Seja-bem vindo(a) ao curso de ${curso}! `;
  
}
//Chamada da função saudacao
const mensagemDaSaudacao = saudacao('Crislei', 'Back-end em Node.js');

console.log(mensagemDaSaudacao);

//Exemplo 2
console.clear();

function somar(numero1, numero2) {
    return numero1 + numero2;
}
 const resultado = somar(8,9);

 console.log(resultado);
 console.log(resultado / 10);

 console.clear();

//-----------------------------------------
 //FUNÇÕES ANÔNIMAS: função sem nome

const dobroDoNumero = function (numero) {
    return numero * 2
}
const dobro = dobroDoNumero(2)
console.log(dobro)

console.clear();

//----------------------------
//ARROW FUNCTIONS: Função Seta

const subtrair = (numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) => numero1 * numero2;

