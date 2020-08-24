
//questão 1 Resolva as questões a seguir usando alert, confirm e prompt:

/*Exiba a mensagem “Olá, mundo!” usando alert
Dessa vez, peça o nome do usuário (ex: Joana) e o cumprimente (“Olá, Joana!”)
Modifique a questão anterior para perguntar ao usuário se é a primeira vez que ele acessa o site. 
Se não for, não peça seu nome nem o cumprimente.*/

const mensagemOlaMundo = alert("Olá,mundo!")

const pedirNome = prompt("Qual o seu nome");
const cumprimentarNome = alert("olá, " +pedirNome)
const perguntarPrimeiraVez = confirm("É a primeira vez, que você visita o nosso site?")

//questão 2 

document.querySelector("h1")

document.querySelectorAll("ul > li")
/Ou seja, selecionando todos os filhos de ul



//questão 3 Faça com que a mensagem “Olá, mundo!” seja exibida ao se clicar num botão. 

const button = document.querySelector ("button");
button.addEventListener ("click",  () => {alert("Olá,mundo!")});

//questão 4 - Esconda e exiba um elemento ao clicar num botão, usando o atributo hidden.


FUNCIONOU NO CODEPEN , AQUI NÃO;

html
 <button>Revelar spoiler</button>
 <div class="spoiler" hidden>Seu personagem favorito, Morre!</div>

const button = document.querySelector("button");
const spoiler = document.querySelector(".spoiler");


    button.addEventListener("click", ( ) => {
        const estaOculto = spoiler.hasAttribute("hidden");

        if (estaOculto){
            spoiler.removeAttribute("hidden");
        } else {
            spoiler.setAttribute("hidden","");
        }
    })



const element = document.querySelector("div")

document
	.querySelector("button")
	.addEventListener("click", () => {
		element.toggleAttribute("hidden");
    })



//Questão 5-Adicione e remova a classe riscado de um elemento ao clicar num botão, conforme gif.
//FUNCIONOU NO CODEPEN , AQUI NÃO;

html
<button>Feito </button>
   <div class="compras">Fazer compras</div>

Js
const button = document.querySelector("button");
const compras = document.querySelector("div");

button.addEventListener("click", ()=> {
    compras.classList.toggle("riscado")
})


//Questão 6 - Resolva a questão 5 sem usar classes, manipulando diretamente o style.

const button = document.querySelector("button");
const compras = document.querySelector("div");

button.addEventListener("click", ()=> {
  if(compras.style["textDecoration"] === "line-through"){
    compras.style["textDecoration"]  = "";
  } else{
    compras.style["textDecoration"] ="line-through";
  }
})

// Questão 7- Faça um contador de cliques, conforme gif:
HTML 
<div>O botão foi clicado <span class="contador">0</span></div>
<button>Clicar</button>
JS

let contagem = 0
const button = document.querySelector("button");
const contador = document.querySelector(".contador");

button.addEventListener("click", ()=> {
    contagem +=1;
    contador.innerText = contagem;
})









