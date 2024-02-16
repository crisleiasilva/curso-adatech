//FIRST CLASS FUNCTION
// Uma linguagem de programação é dita First Class Function quando as funções nessa linguagem são tratadas como qualquer outra variável. Por exemplo, uma função pode ser passada como parâmetro para outra função, assim como pode ser retomada por uma função e esse retorno pode ser atribuído a uma variável.
//-----------------------------
//HIGH ORDER FUNCTION
//Uma High Order Function é uma função que recebe outra função como parâmetro, ou uma função que retorna outra função;
//1 Função que retorna outra função como parâmetro

// function welcome(courseName) {
//   return (studentName) => {
//    console.log (`Olá, ${studentName}! Seja bem-vindo(a) ao curso de ${courseName}`);
//   }
// }

// const displayWelcomeToFrontEndCourse = welcome("Front-end em React");

// displaywelcomeToFrontEndCourse("Crislei Silva");

// console.clear();


//2. Função que recebe outra função como parãmtero

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

const retorno = calcular(10,5,dividir);

console.log(retorno);
