// const prompt = require('prompt-sync')();

// let senha;

// do {
// 	// Este bloco executa primeiro, independente da condição
// 	senha = prompt("Defina uma senha (mínimo de 4 caracteres): ");

// 	if (senha.length < 4) {
// 		console.log("Erro: Senha muito curta! Tente novamente.");
// 	}
// } while (senha.length < 4); // Só verifica depois de ter rodado o bloco acima

// console.log("-----------------------------------------");
// console.log("Sucesso: Senha cadastrada com sucesso!");
// console.log("-----------------------------------------");


const prompt = require('prompt-sync')();

let senha="";

while (senha.length < 4){
	senha = prompt("Defina uma senha (mínimo de 4 caracteres): ");

	if (senha.length < 4) {
		console.log("Erro: Senha muito curta! Tente novamente.");
	}
}

console.log("-----------------------------------------");
console.log("Sucesso: Senha cadastrada com sucesso!");
console.log("-----------------------------------------");