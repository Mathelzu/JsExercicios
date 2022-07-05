// console.log(`trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;

// ctrl k c (marca)

const listasDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Cuiabá`
);
listasDeDestino.push(`Curitiba`)
console.log("Destinos Possíveis:")
//contagem começa do 0
listasDeDestino.splice(1,1)
console.log(listasDeDestino[1], listasDeDestino[0])
//console.log(listasDeDestino[1])--- imprimir apenas o numero selecionado

