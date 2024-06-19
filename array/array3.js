let numeros = []
let min = 12
let max = 35
let saida = document.getElementById('divSaida2')
for (i = 0; i < 30; i++) {
    let n = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.push(n)
}
console.log(numeros);
for (i = 0; i < numeros.length; i++) {
    saida.innerHTML += numeros[i] + ','
}
