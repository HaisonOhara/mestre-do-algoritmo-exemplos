const prompt = require('prompt-sync')();
let compras = ["Arroz", "Feijão", "Leite", "chocolate","Ovos Podres" , "Aveiaa"];
let itemNovo = prompt("Qual itens irá substituir os ovos podres?");
compras[4] = itemNovo
console.log(compras)