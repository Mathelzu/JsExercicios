console.log(`trabalhando com condicionais`);

const listasDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = true;
const temPassagem = true;
console.log("Destinos Possíveis:");
console.log(listasDeDestino);

// if(idadeComprador >=18){
//     console.log("Maior de idade");
//     listasDeDestino.splice(1,1);//removendo um item
// }else if(estaAcompanhado){
//     console.log("Esta acompanhado")
//     listasDeDestino.splice(1,1);
// } else{
//     console.log("Comprador não é maior de idade");
// }

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa Viagem!");
    listasDeDestino.splice(1, 1);//removendo um item
} else {
    console.log("Comprador não é maior de idade");
}
console.log("\n\n Embarque: ")
if(idadeComprador >= 18 && temPassagem){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listasDeDestino);