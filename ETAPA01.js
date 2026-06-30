const prompt = require('prompt-sync')();

// 1. Criando o Array de Objetos para o Cardápio Fixado
const cardapio = [
    { nome: "Espresso", preco: 6.00 },
    { nome: "Cappuccino", preco: 10.50 },
    { nome: "Latte", preco: 9.00 },
    { nome: "Pao de Queijo", preco: 5.00 }
];

// 2. Função que percorre o array e lê as propriedades de cada objeto
function exibirCardapio(){
    console.log("\n=== 📜 CARDÁPIO DEVCOFFEE ===");
    for (let i = 0; i < cardapio.length; i++) {
        // Acessamos o item pelo índice [i] e depois usamos o ponto (.) para pegar a propriedade
        console.log(`• ${cardapio[i].nome} - R$ ${cardapio[i].preco.toFixed(2)}`);
    }
    console.log("=============================");
}

exibirCardapio();