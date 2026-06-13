const prompt = require('prompt-sync')();

// 1. Definindo a função com retorno
function somar(a, b) {
	console.log("Valor de A" , a)
	console.log("Valor de B" , b)
	const resultadosubtracao = a-b;
	a*b;
	return 10>7;
}
function AmaiorQueB(a, b) {
	
	return a>b;
}

const AmaiorQueb = AmaiorQueB(30, 20)

if(AmaiorQueb){
	console.log("A MAIOR QUE B")
} else {
	console.log("A MENOR QUE B")
}

// // 2. Capturando dados
// let n1 = parseFloat(prompt("Digite o primeiro número: "));
// let n2 = parseFloat(prompt("Digite o segundo número: "));

// // 3. Chamando a função e guardando o resultado em uma variável
// let resultado = somar(n1, n2);
// // let result2 = somar(1,30)
// console.log(`A soma dos números é: ${resultado}`);
// // console.log(result2)