const prompt = require('prompt-sync')();

let qtdAlunos = parseInt(prompt("Quantos alunos na sala? "));
let somaNotas = 0;

for (let i = 1; i <= qtdAlunos; i++) {
    console.log(`===${i}====`)
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i}: `));
	somaNotas += nota;
}

let media = somaNotas / qtdAlunos;
console.log("A média da turma é: " + media.toFixed(2));