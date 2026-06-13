// 1. Importa e configura o prompt-sync
const prompt = require('prompt-sync')();

function passouDeAno(media) {
    return media >= 7;
}

// 2. Captura a nota do usuário e converte para número
let mediaFinal = Number(prompt("Digite a média final do aluno: "));

// 3. Executa a lógica de aprovação baseada na resposta
if (passouDeAno(mediaFinal)) {
    console.log("Parabéns, aprovado!");
} else {
    console.log("Estude mais, reprovado.");
}