
// const prompt = require('prompt-sync')();let n = parseInt(prompt("Fatorial de qual número? "));let resultado = 1;for (let i = n; i > 0; i--) {

//     resultado = resultado * i;

// }console.log(`O fatorial de ${n} é ${resultado}`);
// FORMA SIMPLIFICADA
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Fatorial de qual número? "));
console.log("valor de n" ,n)
let resultado = 1;

for (let i = n; i > 0; i--) {
	resultado *= i;
}

console.log(`O fatorial de ${n} é ${resultado}`);



