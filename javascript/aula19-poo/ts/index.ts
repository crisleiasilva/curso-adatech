 //Aula 19 - POO

 interface IPessoa {
  nome: string;
  idade: number;
  altura: number;
  peso: number;
  
  dormir: () => void;
 }

 //Classe: abstração
 class Pessoa implements IPessoa {
  //atributo: características
  nome: string;
  idade: number;
  altura: number;
  peso: number;


//métodos: ação que a classe realiza(são funções)

//método construtor é obrigatório dentro de qualquer classe

constructor(nome:string, idade:number, altura:number, peso:number) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
}


  dormir() {
    console.log("Dormindo...");
  }
 } 
 
 //Criando(instanciando) uma pessoa a partir da definição da classe Pessoa

 const pessoa1 = new Pessoa("Crislei", 42, 1.70,80);
 const pessoa2 = new Pessoa("Miguel", 10, 1.65, 74);

 console.log(pessoa1);
 console.log(pessoa1.nome);

 console.log(pessoa2);
 console.log(pessoa2.dormir());