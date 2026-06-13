// Criando o Array que guarda Objetos dentro
const vitrine = [
    { nome: "Mouse Gamer", preco: 120.00 },
    { nome: "Teclado Mecânico", preco: 250.00 },
    { nome: "Headset Pro", preco: 380.00 }
];

console.log("=== PRODUTOS DISPONÍVEIS ===");

// O laço roda de acordo com o tamanho do Array
for (let i = 0; i < vitrine.length; i++) {
    // IMPORTANTE: Acessamos o item pelo índice [i] e depois usamos o ponto (.) para pegar a propriedade
    console.log(`Produto: ${vitrine[i].nome} | Valor: R$ ${vitrine[i].preco.toFixed(2)}`);
}