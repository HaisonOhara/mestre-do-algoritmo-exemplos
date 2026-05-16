const prompt = require('prompt-sync')();

// 1. Definindo a função com retorno
function somar(a, b) {
	return a + b;
}

// 2. Capturando dados
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));

// 3. Chamando a função e guardando o resultado em uma variável
let resultado = somar(n1, n2);
let result2 = somar(1,30)
console.log(`A soma dos números é: ${resultado}`);
console.log(result2)