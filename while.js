const prompt = require('prompt-sync')();

	let total = 0;
	let numero;

    while(numero !== 0){
    numero = Number(prompt("Digite um número para somar (ou 0 para sair): "));
	total += numero;
    }


console.log(`Soma total: ${total}`);