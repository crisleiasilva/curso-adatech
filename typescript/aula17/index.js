"use strict";
// let numero = 20;
// const candidato: Person = {
//   nome:'Crislei',
//   idade: 42 ,
//   profissao:'Desenvolvedora',
//   senioridade:'Junior'
// };
// console.log(candidato);
// //type = um tipo abstrato, pode ser um objeto
// type Person1 = {
//   nome:string;
//   idade: number;
//   profissao: string;
//   senioridade?: string;
// }
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, 'greater');
console.log("numeroEscolhido:", numeroEscolhido);
// type aliases = apelido do type
function somar(num1, num2) {
    return num1 + num2;
}
const outraPessoa = {};
const Pessoas = {
    '123.486.789-00': {
        nome: 'Fulano',
        idade: 25,
        altura: 1.80,
    }
};
