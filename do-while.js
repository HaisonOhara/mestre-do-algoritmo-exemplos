const prompt = require('prompt-sync')();

	let total = 0;
	let numero;
    let nome = "Haison"

	do {
		numero = Number(prompt("Digite um número para somar (ou 0 para sair): "));
		total += numero;
	} while (numero !== 0);

console.log("qtd caracter",nome.length)
console.log(`Soma total: ${total}`);

