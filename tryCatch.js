try {
  const n1 = 90

  if(n1>50){
    throw new Error("N1 É MAIOR DO QUE 50 eu nao permito isso aqui")
  }
  let soma = n1 + 10;
  console.log("SOMA",soma)
} catch (erro) {
  console.log("Ops, algo deu errado com os dados! ocorreu o erro:", erro.message);
}


// try {
//   let soma = toninhos + 10;
//   console.log(soma)
// } catch (erro) {
//   console.log("Ops, algo deu errado com os dados!"+erro.message);
// }