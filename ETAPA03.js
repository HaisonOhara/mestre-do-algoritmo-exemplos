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
function addCarrinho(){
     let buscarProduto = prompt("Digite o nome do produto exatamente como no cardápio: ");
            let produtoEncontrado = null;

            for (let i = 0; i < cardapio.length; i++) {
                if (cardapio[i].nome.toLowerCase() === buscarProduto.toLowerCase()) {
                    produtoEncontrado = cardapio[i];
                    break;
                }
            }

            if (!produtoEncontrado) {
                throw new Error("Produto não encontrado no cardápio.");
            }

            carrinho.push(produtoEncontrado);
            console.log(`✅ ${produtoEncontrado.nome} adicionado ao seu carrinho!`);
}

let carrinho = [];
let loopMenu = true;

while (loopMenu) {
    console.log("\n--- MENU PRINCIPAL ---");
    console.log("1. Ver Cardápio");
    console.log("2. Adicionar Item ao Pedido");
    console.log("3. Ver Pedido e Subtotal");
    console.log("4. Finalizar e Pagar");
    console.log("5. Cancelar e Sair");

    // === EVOLUÇÃO FASE 3: Proteção com Try...Catch ===
    try {
        let opcao = prompt("Escolha uma opção: ");

        if (opcao === "1") {
            exibirCardapio();

        } else if (opcao === "2") {
            addCarrinho();

        } else if (opcao === "3") {
            if (carrinho.length === 0) {
                console.log("🛒 Seu carrinho está vazio no momento.");
            } else {
                console.log("\n🛒 SEU PEDIDO ATUAL:");
                let soma = 0;

                for (let i = 0; i < carrinho.length; i++) {
                    console.log(`- ${carrinho[i].nome}: R$ ${carrinho[i].preco.toFixed(2)}`);
                    soma += carrinho[i].preco;
                }
                console.log(`Subtotal parcial: R$ ${soma.toFixed(2)}`);
            }

        } else if (opcao === "4") {
            console.log("[Funcionalidade em desenvolvimento na Fase 4]");
        } else if (opcao === "5") {
            console.log("Pedido cancelado. Até logo!");
            loopMenu = false;
        } else {
            throw new Error("Opção inválida do menu.");
        }

    } catch (erro) {
        console.log(`\n🚨 Ops! ${erro.message} Tente novamente.`);
    }
}