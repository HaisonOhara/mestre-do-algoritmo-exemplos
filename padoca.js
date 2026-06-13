const prompt = require('prompt-sync')();

// Função para calcular o preço de cada item
function calcularPreco(qtd, preco) {
	return qtd * preco;
}

let sacola = [];
let totalGeral = 0;

// Agora o usuário define o limite do laço (o tamanho do Array)
let tamanhoSacola = parseInt(prompt("Quantos produtos deseja cadastrar? "));

for (let i = 0; i < tamanhoSacola; i++) {
	console.log(`\n--- Cadastrando item ${i + 1} de ${tamanhoSacola} ---`);

	let nome = prompt("Nome do produto: ");
	let valor = parseFloat(prompt("Preço unitário: "));
	let qtd = parseInt(prompt("Quantidade: "));

	// Processamento
	let subtotal = calcularPreco(qtd, valor);
	totalGeral += subtotal;
	sacola.push(nome);
}

// Saída de dados
console.log("\n==========================");
console.log("      CUPOM FISCAL");
console.log("==========================");
console.log("Produtos: " + sacola.join(" | "));
console.log("Total a pagar: R$ " + totalGeral.toFixed(2));
console.log("==========================");