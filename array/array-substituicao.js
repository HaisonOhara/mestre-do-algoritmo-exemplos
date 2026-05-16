const prompt = require('prompt-sync')();
let compras = ["Arroz", "Feijão", "Leite", "chocolate","Ovos Podres" , "Aveiaa"];
let comprasvazio = [];
comprasvazio.push("ferramenta")
let itemAtrocar = prompt("Qual dos itens vou trocar?");
let itemNovo = prompt("Qual será item novo");

if(compras.includes(itemAtrocar)){
    const posicaoDoItem = compras.indexOf(itemAtrocar)
    compras[posicaoDoItem] = itemNovo;
    console.log("LISTA NOVA => ",compras )
}else{
    console.log("esse item nao existe na lista doidao")
}



// VERSAO MAIS COMPLICADA
// const prompt = require('prompt-sync')();
// let compras = ["Arroz", "Feijão", "Leite", "chocolate","Ovos Podres" , "Aveiaa"];
// let itemAtrocar = prompt("Qual dos itens vou trocar?").toLowerCase();
// let itemNovo = prompt("Qual será item novo");
// const comprasNormalizado = compras.map(item=> item.toLowerCase());
// console.log("array de compras anao", comprasNormalizado)

// if(comprasNormalizado.includes(itemAtrocar)){
//     const posicaoDoItem = comprasNormalizado.indexOf(itemAtrocar)
//     comprasNormalizado[posicaoDoItem] = itemNovo;
//     console.log("LISTA NOVA => ",comprasNormalizado )
// }else{
//     console.log("esse item nao existe na lista doidao")
// }

// Exemplo includes
// compras.includes(itemAtrocar)? console.log("ACHOU O ITEM") : console.log("N ACHOU O ITEM")