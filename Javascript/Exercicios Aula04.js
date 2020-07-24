*Questão 01 - Pedra, papel ou tesoura.
 Duas pessoas estão jogando pedra, papel ou tesoura. Você deve imprimir o nome da jogadora vencedora, ou "empate", em caso de empate.*/

const jogadora1 = {
nome: "Maria",
jogada: "pedra"
}
const jogadora2 = {
nome: "Clara",
jogada: "tesoura"
}

if (jogadora1.jogada === jogadora2.jogada){
  console.log("Empate");
}
else if {
   (jogadora1.jogada ==="pedra" && jogadora2.jogada ==="tesoura"); 
  {
    console.log(jogadora1.nome " Venceu");
  }
  else {
    console.log(jogadora2.nome " Venceu");
  }
}


/*Questão02 -Par ou ímpar.
 Duas pessoas estão jogando par ou ímpar. Você deve imprimir o nome da jogadora vencedora.*/

const jogadora1 = {
nome: "Maria",
jogada: 2,
escolha: "par"
};

const jogadora2 = {
nome: "Clara",
jogada: 7,
escolha: "impar"
};

const resultado =(jogadora2.jogada + jogadora1.jogada);

if (resultado%2==0){
  ehpar=true;
}
else { 
  ehpar=false;
}

if( jogadora1.escolha ==="par" && ehpar){
  console.log ( jogadora1.nome + " Venceu");
}
else if( jogadora1.escolha ==="impar" && ehpar===false){
  console.log ( jogadora1.nome + " Venceu");
}
else{
  console.log ( jogadora2.nome + " Venceu");
}
  
/*Questão03. Dominó.
 Num jogo de dominó toda pedra tem dois números. Quando uma pedra tem o mesmo número dos dois lados, dizemos que essa pedra é uma bucha. Faça um programa que imprima se
uma pedra é uma bucha ou não.*/

const pedra1 = {
ladoA: 5,
ladoB: 3
};
const pedra2 = {
ladoA: 4,
ladoB: 4
};

if (pedra1.ladoA === pedra1.ladoB){
  console.log("É uma bucha");
}
else{
  console.log("Não é uma bucha");
}

/*Questão04- Dando nome as pedras 
 Modifique o código anterior para que, quando a pedra for uma bucha, digamos qual o "nome" da bucha. Para quem não constuma jogar dominó, segue um Glossário:

0 Branco
1 Ás
2 Duque
3 Terno
4 Quadra
5 Quina
6 Sena*/

const pedra = {
ladoA: 6,
ladoB: 3
};
if (pedra.ladoA == pedra.ladoB){
  switch (pedra.ladoA){
  case 0:
    console.log( "É uma bucha de branco");
  break;
   case 1:
    console.log( "É uma bucha de ás");
  break; 
  case 2:
    console.log( "É uma bucha de Duque");
  break;
   case 3:
    console.log( "É uma bucha de terno");
  break;
   case 4:
    console.log( "É uma bucha de quadra");
  break;
   case 5:
    console.log( "É uma bucha de quina");
  break;
   case 6:
    console.log( "É uma bucha de sena");
  break;
}}
else{
  console.log("Não é uma bucha");
}

