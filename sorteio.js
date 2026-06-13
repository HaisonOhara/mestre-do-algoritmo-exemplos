const prompt = require('prompt-sync')();


const alunos = ["Alice", "Nickson", "Victor", "Pietra", "Gustavo", "Davi"];

// 2. Array com os 6 adesivos únicos que você comprou (substitua pelos temas reais!)
let adesivos = [
    "JavaScript Amarelo (Logo)",
    "Gatinho Programador (Meow Code)",
    "Cyberpunk / Hacker Neon",
    "Pinguim do Linux (Tux)",
    "Café + Código (DevCoffee)",
    "Banco de Dados (Database Error)"
];

function realizarSorteio(indiceAluno) {
    if (indiceAluno >= alunos.length) {
        console.log("\n=========================================");
        console.log("🎉 FIM DO SORTEIO! TODOS GANHARAM ADESIVOS! 🎉");
        console.log("=========================================\n");
        return;
    }

    let alunoAtual = alunos[indiceAluno];

    console.log(`\n-----------------------------------------`);
    prompt(`👉 Pressione ENTER para rodar o sorteio de: ${alunoAtual.toUpperCase()}`);
    console.log(`🥁 Sorteando adesivo para ${alunoAtual}...`);

    // Usando o setTimeout da aula para criar o suspense de 2 segundos!
    setTimeout(() => {
        // Gera um índice aleatório baseado no tamanho ATUAL do array de adesivos
        let indiceSorteado = Math.floor(Math.random() * adesivos.length);
        
        // .splice remove o item do array e o retorna dentro de uma nova lista
        let adesivoGanho = adesivos.splice(indiceSorteado, 1)[0];

        console.log(`🎁 [GANHOU!] ${alunoAtual} levou o adesivo: 🌟 ${adesivoGanho} 🌟`);
        
        // Chama o sorteio do próximo aluno da lista
        realizarSorteio(indiceAluno + 1);
    }, 2000);
}

// --- INÍCIO DO SISTEMA ---
console.log("=========================================");
console.log("   🤖 SISTEMA DEVCOFFEE DE SORTEIO 🤖   ");
console.log("=========================================");
console.log(`Alunos participantes: ${alunos.join(", ")}`);
console.log(`Total de adesivos disponíveis: ${adesivos.length}`);

// Dispara o sorteio começando pelo primeiro aluno (índice 0)
realizarSorteio(0);