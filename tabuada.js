const prompt = require('prompt-sync')();
let num = parseInt(prompt("Qual tabuada você quer? "));

for (let i = 1; i <= 10; i++) {
	console.log(`${num} x ${i} = ${num * i}`);
}