const prompt = require('prompt-sync')();
//Primeira Opcao
// let caixa = [];
// while (true) {
//     let item = prompt("Adicione uma ferramenta (ou 'parar'): ");
//     if (item === "parar") break;
//     caixa.push(item);
// }
// console.log(`Você guardou ${caixa.length} ferramentas.`);
// console.log(`Suas ferramentas são ${caixa}`);


// Segunda Opcao
// let caixa = [];
// let controle;
// while (controle !== "parar") {
//     let item = prompt("Adicione uma ferramenta (ou 'parar'): ");
//     if (item !== "parar") {
//         caixa.push(item);
//     }
//     controle = item
// }
// console.log(`Você guardou ${caixa.length} ferramentas.`);
// console.log(`Suas ferramentas são ${caixa}`);


// let caixa = [];

// // No for: (inicialização; condição; incremento)
// for (let controle = ""; controle !== "parar"; ) {
//     let item = prompt("Adicione uma ferramenta (ou 'parar'): ");
    
//     if (item === "parar") {
//         controle = "parar"; // Atualiza o controle para sair do loop
//     } else {
//         caixa.push(item);
//     }
// }

// console.log(`Você guardou ${caixa.length} ferramentas.`);

let caixa = [];
let item;

do {
    item = prompt("Adicione uma ferramenta (ou 'parar'): ");
    
    if (item !== "parar") {
        caixa.push(item);
    }
    
} while (item !== "parar");

console.log(`Você guardou ${caixa.length} ferramentas.`);
console.log(`Suas ferramentas são: ${caixa.join(", ")}`);

console.log(`Suas ferramentas são: ${caixa.join(", ")}`);