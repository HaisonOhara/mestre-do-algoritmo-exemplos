// 1. Uma função que simula a internet demorando 3 segundos para responder
function buscarPrecoDoHamburguer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Depois de 3 segundos, a promessa se cumpre e entrega o preço
            resolve(35.00); 
        }, 3000);
    });
}

// 2. A função principal usando as palavras mágicas do mercado
async function simularPedido() {
    console.log("========================================");
    console.log("1. Cliente olhou o balcão e fez o pedido.");
    console.log("2. Recebeu o BIP (Promise Pendente)...");
    console.log("========================================");
    console.log("Aguardando a cozinha... ⏳ (Olhem o terminal)");

    // O 'await' faz o Node PARAR aqui por 3 segundos até a Promise resolver
    let preco = await buscarPrecoDoHamburguer();

    // Esse código SÓ roda quando os 3 segundos acabam
    console.log("\n========================================");
    console.log("3. 🔊 O BIP TOCOU! (Promise Resolvida!)");
    console.log(`4. Hambúrguer pronto! O preço final é: R$ ${preco.toFixed(2)}`);
    console.log("========================================");
}

// Executa a simulação
simularPedido();