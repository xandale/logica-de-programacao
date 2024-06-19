let impares = []
let soma = 0

for(let contagem=0; contagem < 5; contagem++){
    let numero = Number(prompt('Digite um número inteiro'))
    // verificar se é impar
    if (numero % 2 != 0) {
// adicionar o numero no array de impares e na soma
        impares.push(numero)
        soma += numero
    }
}
alert (`A soma dos números impares é ${soma} e os números são ${impares.join(",")}`)
console.log (soma)