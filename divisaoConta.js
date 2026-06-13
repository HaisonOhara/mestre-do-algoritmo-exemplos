const prompt = require('prompt-sync')();

try {
    let totalConta = parseFloat(prompt("Valor total da conta: R$ "));
    let pessoas = parseInt(prompt("Número de pessoas para dividir: "));
    console.log(typeof totalConta)
    // No JS, divisão por zero gera "Infinity". 
    // Nós forçamos o erro manualmente se a condição for inválida
    if( typeof totalConta === "string") {
      throw new Error("PRECISA INFORMAR UM NUMERO");
    }
    if (pessoas === 0) {
        throw new Error("Divisão por zero");
    }

    let resultado = totalConta / pessoas;
    console.log(`Cada pessoa vai pagar: R$ ${resultado.toFixed(2)}`);

} catch (erro) {
    // O catch captura o erro disparado pelo 'throw' ou qualquer falha do sistema
    console.log("⚠️ Ops! Não é possível dividir a conta por zero pessoas. Digite um número válido!");
}