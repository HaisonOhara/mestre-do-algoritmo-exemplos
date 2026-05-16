const prompt = require('prompt-sync')();

// 1. Definindo a função
function saudarUsuario(nome , segundoNome) {
	console.log(`Olá, ${nome}! Seja bem-vindo à nossa aula de funções.`);
    console.log("Vaza daqui", segundoNome)
}

// 2. Usando a função
let nomeDigitado = prompt("Qual o seu nome? ");
const x = saudarUsuario("Rato", nomeDigitado);
console.log(x)