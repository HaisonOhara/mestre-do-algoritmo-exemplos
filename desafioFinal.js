const prompt = require('prompt-sync')();

const cardapio = [
    { nome: "Espresso", preco: 6.00 },
    { nome: "Cappuccino", preco: 10.50 },
    { nome: "Latte", preco: 9.00 },
    { nome: "Pao de Queijo", preco: 5.00 }
];

// === EVOLUÇÃO FASE 4: Cupons Aceitos ===
const cuponsValidos = ["DEVSORTUDO", "CAFEINA10"];

function exibirCardapio() {
    console.log("\n=== 📜 CARDÁPIO DEVCOFFEE ===");
    for (let i = 0; i < cardapio.length; i++) {
        console.log(`• ${cardapio[i].nome} - R$ ${cardapio[i].preco.toFixed(2)}`);
    }
    console.log("=============================");
}

// === EVOLUÇÃO FASE 4: Arrow Function e .forEach para somar valores ===
const calcularSubtotal = () => {
    let subtotal = 0;
    carrinho.forEach(item => {
        subtotal += item.preco;
    });
    return subtotal;
};

let carrinho = [];
let loopMenu = true;

while (loopMenu) {
    console.log("\n--- MENU PRINCIPAL ---");
    console.log("1. Ver Cardápio");
    console.log("2. Adicionar Item ao Pedido");
    console.log("3. Ver Pedido e Subtotal");
    console.log("4. Finalizar e Pagar");
    console.log("5. Cancelar e Sair");

    try {
        let opcao = prompt("Escolha uma opção: ");

        if (opcao === "1") {
            exibirCardapio();
            
        } else if (opcao === "2") {
            let buscarProduto = prompt("Digite o nome do produto: ");
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
            console.log(`✅ ${produtoEncontrado.nome} adicionado ao carrinho!`);

        } else if (opcao === "3") {
            if (carrinho.length === 0) {
                console.log("🛒 Seu carrinho está vazio.");
            } else {
                console.log("\n🛒 SEU PEDIDO ATUAL:");
                // Substituído for antigo por .forEach moderno
                carrinho.forEach(item => console.log(`- ${item.nome}: R$ ${item.preco.toFixed(2)}`));
                console.log(`Subtotal: R$ ${calcularSubtotal().toFixed(2)}`);
            }

        // === EVOLUÇÃO FASE 4: Fechamento de Caixa, Validação de Cupom e .join() ===
        } else if (opcao === "4") {
            if (carrinho.length === 0) {
                console.log("⚠️ Você não pode finalizar um pedido sem itens no carrinho!");
                continue;
            }

            let valorFinal = calcularSubtotal();
            let temCupom = prompt("Possui cupom de desconto? (s/n): ");

            if (temCupom.toLowerCase() === "s") {
                let cupomDigitado = prompt("Digite o código do cupom: ");
                
                // Valida se o cupom inserido está incluído na nossa lista oficial
                if (cuponsValidos.includes(cupomDigitado.toUpperCase())) {
                    let desconto = valorFinal * 0.10; // Calcula 10%
                    valorFinal -= desconto;
                    console.log(`🎉 Cupom aplicado com sucesso! Desconto de R$ ${desconto.toFixed(2)}`);
                } else {
                    console.log("🚨 Cupom inválido ou expirado. Prosseguindo sem desconto.");
                }
            }

            // Criando um array temporário de Strings apenas com nomes para usar o .join()
            let listaNomesItens = [];
            carrinho.forEach(item => listaNomesItens.push(item.nome));

            console.log("\n=============================");
            console.log("        CUPOM FISCAL");
            console.log("=============================");
            console.log("Produtos: " + listaNomesItens.join(" | ")); // Junta os elementos do array com o separador escolhido
            console.log(`TOTAL PAGO: R$ ${valorFinal.toFixed(2)}`);
            console.log("\n✅ Pagamento confirmado. Obrigado e volte sempre!");
            console.log("=============================");

            loopMenu = false; // Desliga o menu e encerra o fluxo do programa de forma direta

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