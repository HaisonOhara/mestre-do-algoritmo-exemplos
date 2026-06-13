// Criando o objeto 'carro' com suas propriedades
const carro = { 
    marca: "Toyota", 
    cor: "Prata",
    ano: 2024,
    radio: { marca: "Japunei" , altMax: "120 decibéis"},
    donos: ["Batman", "Gugu"]
};
console.log(`${JSON.stringify(carro)}`)
// Acessando as informações usando o ponto (.)
// console.log(`Meu carro é um ${carro.marca} da cor ${carro.cor} e ano ${carro.ano}, e o radio da marca ${carro.radio.marca}`);