const prompt = require('prompt-sync')();

let totalCompra = 0;
let precoProduto = -1; // Iniciamos com um valor que não seja 0

console.log("--- SISTEMA DE CAIXA (Digite 0 para finalizar) ---");

while (precoProduto !== 0) {
	precoProduto = Number(prompt("Valor do produto: R$ "));

	if (precoProduto > 0) {
		totalCompra += precoProduto;
		console.log(`Subtotal: R$ ${totalCompra.toFixed(2)}`);
	} else if (precoProduto < 0) {
		console.log("Valor inválido! Digite um preço positivo.");
	}
}

console.log("-----------------------------------------");
console.log(`FECHAMENTO: O total da compra é R$ ${totalCompra.toFixed(2)}`);
console.log("-----------------------------------------");