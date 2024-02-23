// let numero = 20;


// const pi = 3.145;

// let nome = 'Crislei'

// const nomeDoUsuario = prompt("Qual é o seu nome?");

// console.log(nomeDoUsuario?.toUpperCase());

// //Tipagem de array
// const numeros: number []= [1,2,3,4,5];

// const misto: (number | string)[] = ['Miguel, 10, 1.69'] // evite usar desta forma; evite usar o any.
 
// const idade: number[] = [];
// idade.push(23)
// idade.push(38)
// idade.push(10)
// idade.push(49)
// idade.push(16)

// const menoresDeIdade = idade.filter((idade) => idade < 18);

// console.log(menoresDeIdade);

// //Tuples= sempre tem 2 valores dentro da array

// const pessoa: [string,number] = ['Miguel', 10];

// Tipagem de Objeto - Utilizando interface ou type

 interface Person {
   nome: string,
   idade: number,
   profissao: string,
   senioridade: string
 }

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

function chooseNumber(numero1:number, numero2: number, criterio?:'greater' | 'lower'):number {
  switch(criterio) {
    case'greater':
      return numero1 > numero2 ? numero1 : numero2
    case'lower':
      return numero1 < numero2 ? numero1 : numero2
    default:
      const numeroAleatorio = Math.random()

      if(numeroAleatorio >= 0.5) return numero1;
        return numero2;    
  }

}

const numeroEscolhido = chooseNumber(10,20,'greater');

console.log("numeroEscolhido:", numeroEscolhido);

// type aliases = apelido do type

function somar(num1:number, num2:number):number {
  return num1 + num2
}

//Utility Types permitir que vc crie novos tipos a partir de tipos já existentes.

//1. Partial todos os parametros são opcionais

type PersonPartial = Partial<Person>;

const outraPessoa: PersonPartial = {
}

//2. Required

type PersonRequired = Required<Person>;

//3. Pick pegar atributos da interface já existente

type PersonPicked = Pick<Person, 'nome' | 'idade'>

//4.Omit omitir

type PersonOmit = Omit<Person,'profissao'>

//5.Exclude excluir um parâmetro porém mais flexivel

type PersonExclude = Exclude<Person,'idade'>

//5. RECORD
type Pessoas = Record<string, Person>

const Pessoas = {
  '123.486.789-00': {
    nome:'Fulano',
    idade: 25,
    altura:1.80,
  }
}