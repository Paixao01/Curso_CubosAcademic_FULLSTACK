//No arquivo script.js,faça um código que consiga pegar a string digitada pelo usuário,
// quando o mesmo clica no botão, e guardar numa variável chamada entrada.
/*
const button = document.querySelector ("button");
const input = document.querySelector("input")
button.addEventListener ("click",  () => {  
   const entrada = input.value;
});
*/

//No arquivo script.js, crie uma função chamada questao2() que recebe a entrada como argumento.
// Essa função deverá indicar se o texto contém a palavra desenvolvimento. Utilize a função alert() para dar a resposta.

const button = document.querySelector("button")
const input = document.querySelector("input")


button.addEventListener ("click",  () => {  
   const entrada = input.value;
  //questao2(entrada);
  //questao3(entrada);
    questao4(entrada);
});


function questao2(entrada){
   
    if (entrada.includes("desenvolvimento")){
        alert("SIM");
    } else{
        alert("NÃO");
    }
}


//Antes de salvarmos o email de alguém no banco de dados, é prudente primeiro garantir que não
//há espaços em branco no começo e no final da string, bem como garantir que estão sendo usada apenas letras minúsculas.
//No arquivo script.js crie uma função chamada questao3() que recebe a entrada como argumento. 
//Essa função deverá transformar o email para que obedeça as regras acima

function questao3(entrada){
    let texto = entrada.toLocaleLowerCase().trim()
     alert(texto)
}


//questão 4. Em programação, é comum transformarmos dados para um mesmo padrão antes de
// inserí-los num banco de dados. Esse processo é chamado de normalização, e é muito importante.
//No arquivo script.js crie uma função chamada questao4() que recebe a entrada como argumento. 
//Essa função deverá remover todos os . e - de um dado CPF.

function questao4(entrada){
    let texto = entrada.replace("." , "").replace("-","")
    alert(texto)
}

