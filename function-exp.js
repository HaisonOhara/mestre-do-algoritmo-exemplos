// CODIGO EXEMPLO FUNCAO
const prompt = require('prompt-sync')();
const segredo = Math.floor(Math.random() * 1) + 1; // Sorteia entre 1 e 10
console.log("FALA NADA O SEGREDO É:", segredo)
const palpite = Number(prompt("Adivinhe o número (1 a 10): "));

if (palpite === segredo) {
    console.log("Acertou!");
} else {
    console.log(`Errou! Era o ${segredo}`);
}