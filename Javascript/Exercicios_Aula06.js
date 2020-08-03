// Aula 01 - Lista 06
/*Questão 01
Dada uma determinada lutadora de UFC, faça um programa que determine a qual categoria
da competição ele pertence.

Peso Palha (Strawweight) - até 52,2 kg /115 lb (Feminino)
Peso Mosca (Flyweight) - até 56,7 kg / 125 lb
Peso Galo (Bantamweight) - até 61,2 kg / 135 lb
Peso Pena (Featherweight) - até 65,8 kg / 145 lb
Peso Leve (Lightweight) - até 70,3 kg / 155 lb
Peso Meio-Médio (Welterweight) - até 77,1 kg / 170 lb
Peso Médio (Middleweight) - até 83,9 kg / 185 lb
Peso Meio-Pesado (Light Heavyweight) - até 93,0 kg / 205 lb
Peso Pesado (Heavyweight) - até 120,2 kg /*/


const lutadora = {
  nome: "Amanda Nunes",
  massa: 61, //em kg
  altura: 173, //em cm
  arteMarcial: "Jiu-jitsu",
  genero: "F"
  };
  
  if (lutadora.massa<= 52.2){
    console.log ('Peso Palha');
  }
  else if (lutadora.massa<= 56.2){
    console.log ('Peso Mosca');}
  
  else if (lutadora.massa<= 65.8){
    console.log ('Peso Pena');
  }
  else if (lutadora.massa<= 70.3){
    console.log ('Peso Leve');
  }
  else if (lutadora.massa<= 77.1){
    console.log ('Peso Pena');
  }
  else if  (lutadora.massa<= 83.9){
    console.log ('Peso Meio-Médio');
  }
  else if   (lutadora.massa<= 93){
    console.log ('Peso Médio');
  }
  else if  (lutadora.massa<= 120.2){
    console.log ('Peso Pesado');
  }
  //Questão 2
  
  const imc2 = lutadora.massa / (lutadora.altura * lutadora.altura) *10000 ;
   console.log(imc2);
  
  /*Questão 3. 
  Com base na questão anterior, avalie a pessoa de acordo com a tabela abaixo e o IMC dela e imprima a classificação dela na tela.
  
  ***IMC Classificação***
  Menor que 18,5 Magreza
  De 18,5 até 24,9 Normal
  Entre 25 e 29,9 Sobrepeso
  Entre 30 e 39,9 Obesidade
  Maior que 40 Obesidade grave*/
  
  //IMC = Peso / altura x altura
  const imc = 
   lutadora.massa / (lutadora.altura * lutadora.altura);
  
  
  if (imc< 18.5) {
    console.log('Magresa');
  }
  else if (imc = 18.5 &&  imc<=24.9 ) {
    console.log('Normal');
  }
  else if (imc =25 &&   imc<=29.9 ) {
    console.log('Sobrepeso');
  }
  else if (imc =30 &&   imc<=39.9 ) {
    console.log('Obesidade');
  }
  else if (imc < 40 ) {
    console.log('obesidade grave');
  }
  
  /*Questão 4. 
  Uma equação de segundo grau possui sempre 3 coeficientes: A, B e C. Para saber se a equação possui raízes reais,calcula-se o valor de delta. Com o valor de delta é possível descobrir se a equação:
  Não possui raízes reais, caso delta seja negativo
  , caso delta seja zero.Possui duas raízes reais e distintas, caso delta seja positivo Quando delta é positivo, é possível calcular suas raízes reais. As fórmulas para cálculo de delta e das
  raízes (x) seguem abaixo.*/
  
  const equacao1 = {
  a: 1,
  b: -5,
  c: 6
  }; // 2 raízes distintas: 2 e 3
  const equacao2 = {
  a: 1,
  b: -4,
  c: 4
  } // 2 raízes iguais a 2
  const equacao3 = {
  a: 1,
  b: 0,
  c: 4
  } // Não possui raízes reais
  
  let delta = (equacao1.b *equacao1.b -4*equacao1.a*equacao1.c);
  if (delta< 0){
      console.log ('Não possui raizes raiz.');
  
  }
  else if (delta==0){
    let x1= (-equacao1.b + Math.sqrt(delta))/2*equacao1.a;
    let x2= (-equacao1.b - Math.sqrt(delta))/2*equacao1.a;
    console.log ('Possui duas raizes iguais.',+x1);
  }
  
  else{
    let x1= (-equacao1.b + Math.sqrt(delta))/2*equacao1.a;
    let x2= (-equacao1.b - Math.sqrt(delta))/2*equacao1.a;
    console.log ('Possui duas raizes distintas.',+x1, +x2);
  }
  
  
  /*Questão 6. 
  Dadas as medidas dos 3 lados de um possível triângulo é possível descobrir se de fato é possível fazer um triângulo com essas medidas. Isso é chamado de condição de existência de um triângulo. Um triângulo pode existir apenas quando o seu maior lado é menor que a soma de seus dois outros lados. Faça um programa que descubra se um possível triângulo existe ou não. Seguem alguns casos de teste:*/
  
  const triangulo1 = {
  a: 4,
  b: 4,
  c: 4
  };
  const triangulo2 = {
  a: 3,
  b: 5,
  c: 4
  };
  const triangulo3 = {
  a: 12,
  b: 2,
  c: 13
  };
  
  if ((triangulo1.a < triangulo1.b + triangulo1.c) && (triangulo1.b < triangulo1.a + triangulo1.c) && (triangulo1.c < triangulo1.a + triangulo1.b)) {
    console.log ('O triangulo existe');
  }
  else{
    console.log ("Não é um triangulo");
  }
   
   /*Questão 6. 
  Levando em consideração a questão cinco, classifique o triângulo dado em cada uma das categorias abaixo:
  
  Lados Classificação
  3 lados iguais Equilátero
  apenas 2 lados iguais Isósceles
  3 lados diferentes Escaleno
  
  Triângulo equilátero: possui os três lados com medidas iguais.
  Triângulo isósceles: possui dois lados com medidas iguais.
  Triângulo escaleno: possui os três lados com medidas diferentes.*/
   
  if ( triangulo1.a = triangulo1.b = triangulo1.c){
    console.log ("Esse triangulo é equilátero");
  }
  else if ((triangulo1.a != triangulo1.b) && ( triangulo1.b != triangulo1.c) && (triangulo1.c != triangulo1.a)){
    console.log ("Esse triangulo é escaleno");
  }
  else{
    console.log ("Esse triangulo é isósceles");
  }
  
  /*Questão 7.
  Um determinado remédio pode ser ministrado da seguinte maneira:
  --Crianças menores de 12 anos não podem tomar
  --Jovens de 12 a 18 anos tomam apenas uma gota por dia
  --Para adultos a regra difere entre homens e mulheres:
      -Homens tomam apenas uma gota para cada 10kg de massa que possuem.
      -Mulheres tomam duas gotas para cada 10kg de massa que possuem.
      -Pessoas acima de 65 anos são consideradas idosas, e não seguem a regra dos adultos.
      -Elas tomam uma gota para cada 20kg de massa que possuem independente do gênero. 
      -Caso possuam colesterol acima de 160, não podem tomar.
  Faça uma programa que calcule como uma pessoa deve tomar o remédio, caso possa.*/
  
  
  const pessoa = {
  nome: "Pedro",
  massa: 59, //em kg
  altura: 173, //em cm
  idade: 35,
  colesterol: 120,
  genero: "M"
  }
  const qtd_remedioH = Math.floor(pessoa.massa/10);
  const qtd_remedioM = Math.floor(pessoa.massa/10*2);
  const qtd_remedioI = Math.floor(pessoa.massa/20);
  
  if (pessoa.idade < 12){
    console.log('Crianças menor que 12 anos, Não podem tomar');
  }
  else if(pessoa.idade>=12 && pessoa.idade<=18){
    console.log('Tomam apenas uma gota por dia');
  }
  if (pessoa.idade>=18 && pessoa.idade<65){
    if (pessoa.genero ="M"){
      console.log(`${pessoa.nome}  deve tomar ${qtd_remedioH} gotas por dia.`);
    }
    else{
      console.log (`${pessoa.nome} deve tomar ${qtd_remedioM} gotas por dia.`);
    }
  } 
  else if(pessoa.idade >= 65){
        if(pessoa.colesterol< 160){
      console.log(`${pessoa.nome}  deve tomar ${qtd_remedioI} gotas por dia.`);
        }else{
    console.log ('Colesterol acima de 160, não pode tomar');}
  } 
  
  /*Questão 8 
  Na Libertadores da América de futebol, cada fase eliminatória é decidida com dois confrontos entre os dois mesmos times. Em cada um deles, um dos dois times joga em casa (em seu próprio estádio). O time classificado em cada fase é aquele que fizer mais gols somando as duas partidas.
  Caso haja empate nesse critério, passa o time que fez mais gols fora de casa.
  Caso também haja empate nesse critério, a decisão vai pros pênaltis.
  Dados os resultados de uma determinada fase, faça um programa que indique qual time passou para a próxima fase da competição ou se a decisão será nos pênaltis. Ao exibir o resultado, informe o placar agregado (somado) e se foi utilizado o critério de desempate (e quantos gols fora de casa foram feitosnesse caso).*/
  
  
  const semifinal = {
  jogo1: {
  casa: {
  time: "Grêmio",
  gols: 1
  },
  visitante: {
  time: "Flamengo",
  gols: 1
  }
  },
  jogo2: {
  casa: {
  time: "Flamengo",
  gols: 5
  },
  visitante: {
  time: "Grêmio",
  gols: 0
  }
  }
  };
  
  const partida1 = semifinal.jogo1.casa.gols + semifinal.jogo2.visitante.gols;
  const partida2 = semifinal.jogo1.visitante.gols + semifinal.jogo2.casa.gols;
  
  if(partida1 > partida2){
    console.log(`${semifinal.jogo1.casa.time} classificado com ${partida1} pontos a ${partida2} do time rival `)
  }
  