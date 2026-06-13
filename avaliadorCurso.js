// 1. Importa a biblioteca prompt-sync e a configura
const prompt = require('prompt-sync')();

function avaliarCurso(nome) {
    return `O curso de ${nome} é excelente!`;
}

// 2. Em vez de um texto fixo, pedimos para o usuário digitar o nome do curso
let nomeDoCurso = prompt("Digite o nome do curso que deseja avaliar: ");

// 3. Passamos a resposta do usuário para a função
let feedback = avaliarCurso(nomeDoCurso);
