const prompt = require('prompt-sync')();

// Gera um número aleatório entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let chute = 0;

console.log("--- BEM-VINDO AO JOGO DE ADIVINHAÇÃO ---");

while (chute !== numeroSecreto) {
	chute = Number(prompt("Tente adivinhar o número (1 a 10): "));

	if (chute < numeroSecreto) {
		console.log("Muito baixo! Tente novamente.");
	} else if (chute > numeroSecreto) {
		console.log("Muito alto! Tente novamente.");
	}
}

console.log("Parabéns! Você acertou o número " + numeroSecreto);