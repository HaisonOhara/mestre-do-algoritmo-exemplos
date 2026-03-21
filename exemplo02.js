//IMC = Peso dividido pela altura ao qudrado
const prompt = require('prompt-sync')();

const altura = prompt('Qual sua altura: ');
const peso = prompt('Qual seu peso: ');


const resultado = peso/(altura*altura);
console.log("Seu IMC É", resultado.toFixed(2));

if (resultado < 18.5) {
	console.log("Baixo peso");
}
if (resultado >= 18.5 && resultado <= 24.9) {
	console.log("Peso ideal");
}
if (resultado >= 25 && resultado <= 29.9) {
	console.log("Sobrepeso (acima do peso desejado)");
}
if (resultado >= 30 && resultado <= 34.9) {
	console.log("Obesidade grau I");
}
if (resultado >= 35 && resultado <= 39.9) {
	console.log("Obesidade grau II");
}
if (resultado >= 40) {
	console.log("Obesidade mórbida grau III");
}


