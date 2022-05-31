console.log(`\n trabalhando com condicionais`);

const listasDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = true;
let temPassagem = false;
const destino = `Rio de Janeiro`

console.log("\n Destinos Possíveis:");

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
while (contador <3){
    if (listasDeDestino[contador] == destino){
        console.log("Destino existe")
    } else{
        console.log("Destino não existe")
    }
    contador +=1
}