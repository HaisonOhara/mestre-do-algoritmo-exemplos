const prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0) {
    console.log("É Par!");
} else {
    console.log("É Ímpar!");
}