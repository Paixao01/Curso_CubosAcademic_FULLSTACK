//Declaração de Variáveis dos Slides.
console.log("Olá Mundo");
const nome = "José";
console.log (nome);
let idade = 29
console.log (idade);

/*Exercício 01
1-Declaração de Declare uma variável imutável;
2-Guarde o nome da sua cidade natal nela;
3-Imprima essa variável na tela;*/

const cidade = "Salvador";
console.log(cidade);

/*Exercício 02
Assunto: Variáveis let e const
1- Declare uma variável mutável chamada populacao.
2-Guarde a população da sua cidade nessa variável (pode chutar).
3- Imprima essa variável na tela.*/

let populacao = 2677000000;
console.log (populacao);

/*3- Altere o conteúdo dessa variável para um outro número qualquer.
4- Imprima novamente essa variável na tela*/

populacao = 3000000000;
console.log (populacao);

//Assunto: Array

const nomes=["Josi","Maria","Junior"];
console.log (nomes);
console.log (nomes[0]);

nomes[0] = "Julia";
console.log (nomes[0]);
console.log (nomes);

//Inserir dados.
nomes.push ("Soares");
console.log (nomes);

//Remover o ultimo dado inserido.
nomes.pop();
console.log (nomes);

//Apagar o primeiro item dos dados.
nomes.shift(nomes);
console.log (nomes);

//Inserir o primeiro item dos dados.
nomes.unshift("Tuane");
console.log (nomes);

//Tamanho do Vetor
console.log(nomes.length);
console.log (nomes);

//Exercicio 03
/* Crie um array com 5 nomes de países
Adicione um país ao fim da lista
Imprima a lista na tela */

const paises=["Brasil", "Alemanha","Mexico","India","China"];
console.log (paises);

/*Adicione um país o início da lista
  Imprima a lista na tela*/
paises.push("Indonésia");
console.log(paises);

/*Remova um país do fim da lista.
  Imprima a lista na tela.*/
paises.pop();
console.log(paises);

/*Adicione um país o início da lista
Imprima a lista na tela*/
paises.unshift("Irlanda");
console.log(paises);

/*Remova um país do início da lista
Imprima a lista na tela*/
paises.shift(paises);
console.log(paises);

/*Imprima o último país da lista na tela
Imprima o segundo país da lista na tela
Imprima o país de índ ice 2 na tela*/
console.log(paises[4]);
console.log(paises[1]);
console.log(paises[2]);

//Exercício 04 -Objeto
/*Crie um objeto que represente o cartão de consumo de um cliente. Deve ter:
Nome do cliente
Idade do cliente
Produtos consumidos
Cada produto pode ter:
Nome do produto
Preço unitário (em centavos)
Quantidade comprada
Pode inventar os dados. Coloque pelo menos 3 produtos.*/

const cartao_de_consumo = {
produto: ["televisão","celular","notebook"],
preco_unitario:["R$ 1534,00","R$3500","R$4500"]
};

const cliente ={
nome_cliente: ["Daniel","Carlos","Ana"],
idade:[24,45,50],
quantd_c: [1,2,3],
cartao_de_consumo
};

/*Exercicio 05
Imprima o nome do cliente
Imprima a idade do cliente
Modifique a idade do cliente
Imprima a nova idade do cliente
Imprima o nome do primeiro produto consumido
Imprima o preço unitário do último produto consumido por ele*/

console.log (cliente.nome_cliente);
console.log (cliente.idade);

console.log (cliente.idade[0]);
console.log (cliente.nome_cliente[0]);

cliente.idade[0] = 25
console.log (cliente.idade[0]);

console.log (cartao_de_consumo.produto[0]);
console.log (cartao_de_consumo.preco_unitario[0]);


