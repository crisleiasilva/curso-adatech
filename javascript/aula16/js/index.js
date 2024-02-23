
//Fetch API

fetch("https://viacep.com.br/ws/01001000/json/")
 .then((resposta) => {
  resposta.json().then((dados) => console.log(dados)); 
})
  .catch((erro) => {
  console.log(erro);
})

//async / await

async function obterDadosDoCep() {
  const resposta =  await fetch("https://viacep.com.br/ws/01001000/json/")

  const dados = await resposta.json();

  console.log(dados);
}

obterDadosDoCep()