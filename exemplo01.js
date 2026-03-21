const prompt = require('prompt-sync')();

const idade = prompt('Qual sua idade ');
const resultado = idade * 365
// const idade = prompt("qual sua idade?");
console.log(`você viveu por aproximadamente ${resultado.toFixed(2)} dias`);
