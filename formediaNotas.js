const prompt = require('prompt-sync')();

let notas = [];
let soma = 0;
console.log("TAMANHO ANTES DO FOR",notas.length)
// Capturando 4 notas e guardando no array
for (let i = 0; i < 3; i++) {
	notas[i] = parseFloat(prompt(`Digite a nota ${i + 1}: `));
	soma += notas[i];
}
console.log("TAMANHO  DEPOIS DO FOR",notas.length)

let media = soma / notas.length;
console.log(`Suas notas foram: ${notas}`);
console.log(`Sua média final é: ${media.toFixed(1)}`);