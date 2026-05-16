// const prompt = require('prompt-sync')();

// let numeros = [5, 12, 8, 20, 33, 2, 11,2,34];
// let maioresQueDez = 0;

// for (let i = 0; i < numeros.length; i++) {
// 	if (numeros[i] > 10) {
// 		console.log(`Encontrei o número ${numeros[i]}, ele é maior que 10.`);
// 		maioresQueDez++;
// 	}
// }

// console.log(`\nTotal de números maiores que dez: ${maioresQueDez}`);

let numeros = [5, 12, 8, 20, 33, 2, 11,2,34];

const numerosMaioresDez = numeros.filter(numero => numero>10)

console.log(numerosMaioresDez)
console.log("quantidade de numeros maiores que dez",numerosMaioresDez.length)