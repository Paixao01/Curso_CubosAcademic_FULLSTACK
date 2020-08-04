   
  /*
  Numa "peneira" (processo seletivo para novos jogadores) de vôlei, em alguns clubes, o primeiro filtro é ver se um determinado candidato tem a altura mínima necessária de 180cm. Faça um programa que, dada a altura de um determinado candidato, diga se ele está aprovado ou reprovado nessa primeira fase do processo.
 */
   const candidato = {
    altura: 180
   }
 
  	if (candidato.altura <180){
        console.log("APROVADO");
    }
    else {
    console.log("REPROVADO");         
    }

 /*
--Após passar na primeira fase de uma peneira de vôlei, os candidatos aprovados são separados em grupos diferentes, de acordo com suas alturas, para serem testados para posições específicas. Faça um programa que, dada a altura de um determinado candidato, diga para qual posição ele deverá fazer o teste.
Caso o jogador tenha menos de 180cm, o programa deve imprimir REPROVADO.
Caso tenha entre 180cm e 185cm, o programa deve imprimir LIBERO
Caso tenha entre 186cm e 195cm, o programa deve imprimir PONTEIRO
Caso tenha entre 196cm e 205cm, o programa deve imprimir OPOSTO
Caso tenha mais de 205cm, o programa deve imprimir CENTRAL*/


const candidato = {
    altura: 180
   }
 
  if (candidato.altura <180){
    console.log("REPROVADO");
  }
  else if (candidato.altura >= 180 && candidato.altura <= 185){
    console.log("LIBERO");
  }
  else if (candidato.altura >= 186 && candidato.altura <= 195){
    console.log("PONTEIRO");
  }
  else if (candidato.altura >= 196 && candidato.altura <= 205){
    console.log("OPOSTO");
  }
  else{
    console.log("CENTRAL");
  }

  /*
  O jogo de truco é muito popular pelo Brasil. Numa de suas versões, ele é jogado apenas com as cartas Q J K A 2 3. Elas tem essa ordem de "força" nesse jogo, sendo 3 a mais valiosa e Q a menos valiosa. Contudo, a cada partida é virada uma carta com a face pra cima na mesa. Esta carta serve para indicar que a próxima carta é a manilha, ou seja, a carta mais poderosa para essa partida. Fizemos uma tabela resumo para explicar essa mecânica:

Carta virada pra cima	Manilha
Q	J
J	K
K	A
A	2
2	3
3	Q
*/

if(cartaParaCima ==='Q'){
  console.log("J");
}
else if(cartaParaCima ==='J'){
  console.log("K");
}
else if(cartaParaCima ==='K'){
  console.log("A");
}
else if(cartaParaCima ==='A'){
  console.log("2");
}
else if(cartaParaCima ==='2'){
  console.log("3");
}
else {
  console.log("Q");
}
/*
6.Os múltiplos de um determinado número X são aqueles que, ao serem divididos por X, deixa sempre 0 como resto. Faça um programa que verifica se um determinado número é multiplo de 
*/

 if (numero%6 == 0){
           console.log("SIM");
       }  
    else {
           console.log("NAO");     
    }  


