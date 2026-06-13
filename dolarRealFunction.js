const prompt = require('prompt-sync')();

function converterParaReal(valorDolar, cotacao) {
	let x;
	return valorDolar * cotacao;
	// let conversao = valorDolar * cotacao;
	// return conversao;
}

let dolar = parseFloat(prompt("Quantos dólares você tem? "));
let cotacaoHoje = parseFloat(prompt("Qual a cotação do dólar hoje? "));

let valorFinal = converterParaReal(dolar, cotacaoHoje);
valorFinal = 800000
console.log(`Você tem R$ ${valorFinal.toFixed(2)} reais.`);