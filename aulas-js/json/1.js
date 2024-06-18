// Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também... um texto em um objeto.

// Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

// Para trabalhar com JSON no Javascript usamos dois métodos:

// JSON.parse()  Converte texto no padrão JSON em objetos
// JSON.stringify() Converte objetos em texto padrão JSON

// Objeto chamado carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ['1.6','1.4','1.0']
}
// Para converter um objeto em um texto
let texto = JSON.stringify(carro)

document.getElementById("area").innerHTML = texto;
// Converter oara objeto novamente

let obj = JSON.parse(texto);

console.log(obj.motor[2]);