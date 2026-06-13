const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Beto", idade: 17 },
  { nome: "Haison", idade: 28 },
  { nome: "Carla", idade: 30 }
];

function filtrarMaioresForEach(lista) {
  lista.forEach(usuario => {
    if (usuario.idade >= 18) {
      console.log(usuario.nome);
    }
  });
}
function filtrarMaioreFor(lista) {
  for (let i = 0; i < lista.length; i++) {
    let usuario = lista[i];
    if (usuario.idade >= 18) {
      console.log(usuario.nome);
    }
  }
}
function filtrarMaioresForEach2(lista) {
    let maioresDeIdade = [];
    lista.forEach(usuario => {
    if (usuario.idade >= 18) {
      maioresDeIdade.push(usuario.nome)
    }
  });
  return maioresDeIdade.join(" , ")
}
function filtrarMaioreFor2(lista) {
    let maioresDeIdade = [];
    for (let i = 0; i < lista.length; i++) {
    let usuario = lista[i];
    if (usuario.idade >= 18) {
      maioresDeIdade.push(usuario.nome)
    }
  }
    return maioresDeIdade.join(" , ")
}
const resultado = filtrarMaioreFor2(usuarios);

console.log(resultado)