const prompt = require('prompt-sync')();

const cardapio = [
    { nome: "Espresso", preco: 6.00 },
    { nome: "Cappuccino", preco: 10.50 },
    { nome: "Latte", preco: 9.00 },
    { nome: "Pao de Queijo", preco: 5.00 }
];

function exibirCardapio(){
    console.log("\n=== 📜 CARDÁPIO DEVCOFFEE ===");
    for (let i = 0; i < cardapio.length; i++) {
        console.log(`• ${cardapio[i].nome} - R$ ${cardapio[i].preco.toFixed(2)}`);
    }
    console.log("=============================");
}

// === EVOLUÇÃO FASE 2: Variáveis Globais e Estrutura de Loop ===
let carrinho = [];
let loopMenu = true;

while (loopMenu) {
    console.log("\n--- MENU PRINCIPAL ---");
    console.log("1. Ver Cardápio");
    console.log("2. Adicionar Item ao Pedido");
    console.log("3. Ver Pedido e Subtotal");
    console.log("4. Finalizar e Pagar");
    console.log("5. Cancelar e Sair");

    let opcao = prompt("Escolha uma opção: ");

    if (opcao === "1") {
        exibirCardapio();
    } else if (opcao === "2") {
        console.log("[Funcionalidade em desenvolvimento na Fase 3]");
    } else if (opcao === "3") {
        console.log("[Funcionalidade em desenvolvimento na Fase 3]");
    } else if (opcao === "4") {
        console.log("[Funcionalidade em desenvolvimento na Fase 4]");
    } else if (opcao === "5") {
        console.log("Pedido cancelado. Até logo!");
        loopMenu = false;
    } else {
        console.log("Opção inválida!");
    }
}