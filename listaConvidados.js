// const prompt = require('prompt-sync')();

// let listaConvidados = [];
// let continuar = true;

// while (continuar) {
// 	let nome = prompt("Digite o nome do convidado (ou 'sair' para encerrar): ");

// 	if (nome.toLowerCase() === "sair") {
// 		continuar = false;
// 	} else {
// 		listaConvidados.push(nome);
// 		console.log(`${nome} foi adicionado à lista.`);
// 	}
// }

// console.log("\nLista finalizada! Temos " + listaConvidados.length + " convidados.");
// console.log("Nomes:", listaConvidados.join(", "));


// COM DO WHILE
const prompt = require('prompt-sync')();

let listaConvidados = [];
let continuar;

do {
	let nome = prompt("Digite o nome do convidado (ou 'sair' para encerrar): ");

	if (nome.toLowerCase() === "sair") {
		continuar = false;
	} else {
		listaConvidados.push(nome);
		console.log(`${nome} foi adicionado à lista.`);
	}
} while (continuar != false);

console.log("\nLista finalizada! Temos " + listaConvidados.length + " convidados.");
console.log("Nomes:", listaConvidados.join(", "));