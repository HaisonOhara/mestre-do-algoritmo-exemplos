// EXERCICIO ESCOLA
const prompt = require('prompt-sync')();
const nota = Number(prompt("Qual a nota (0 a 10)? "));

if (nota >= 8.9) {

} else if (nota >= 6.0) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado.");
}

if (nota >= 8.9) {
    console.log("Excelente!");
} 
if (nota > 6.0) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado.");
}