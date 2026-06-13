// Maneira Tradicional:

function saudarRetornandoValor() {
    return "FUNCAO QUE RETORNA VALOR"
}

function saudarTradicional() {
    console.log("Olá de forma tradicional!");
}
// Maneira Moderna (Arrow Function com a setinha '=>'):
const saudarModerna = () => {
    console.log("Olá de forma moderna com Arrow Function!");
};

const somarModerna = (a,b) =>  a+b
;

// Ambas fazem exatamente a mesma coisa quando chamadas:
saudarTradicional();
saudarModerna();
console.log(somarModerna(20,30));
const varSaudar = saudarRetornandoValor();
console.log(varSaudar)