// function mostrarMensagem() {
//     // Bloco de codigo que vai ser executado quando a função for Chamada
//     alert ('Seja bem vindo ão sistema')
// }
// // Executar a função
// mostrarMensagem()
// // mostrarMensagem()
// // mostrarMensagem()
// // mostrarMensagem()
// // mostrarMensagem()

// function somar(numero1,numero2){
//     let soma = numero1+numero2
//     alert(`A soma de ${numero1} com ${numero2} é ${soma}`)
// }
// // chamar a função
// somar(4, 5)
// somar(9,5)
// somar(8,6)
// somar(2,7)

// function verificarDano(dano){
//     if(dano > 10){
//         alert("Dano critico")
//     }
//     else{
//         alert('Dano baixo')
//     }
// }

// verificarDano(5)
// verificarDano(15)
// verificarDano(35)

// function somarComRetorno(numero1 = 0,numero2 = 50){
//     let soma = numero1 + numero2
//     return soma
// }

// // Armazenar o retorno da função na variavel resultado
// let resultado = somarComRetorno()
// alert(`O resultado foi ${resultado}`)

// function terreno(largura, profundidade){
//     let soma = largura * profundidade
//     return soma
// }
// //Chamando a função
// let metrosQuadrado1 = terreno(50,40)
// alert(`Terreno padrão: largura: 50m / profundidade: 40m / Metros quadrados: ${metrosQuadrado1}M² `)

// let metrosQuadrado2 = terreno(30,40)
// alert(`Terreno sobrado: largura: 30m / profundidade: 40m / Metros quadrados: ${metrosQuadrado2} `)

// let metrosQuadrado3 = terreno(100,100)
// alert(`Terreno mansão: largura: 100m / profundidade: 100m / Metros quadrados: ${metrosQuadrado3} `)

// let metrosQuadrado4 = terreno(40,40)
// alert(`Terreno comercial: largura: 40m / profundidade: 40m / Metros quadrados: ${metrosQuadrado4} `)


// let numero = prompt("Digite um número para verificar se ele é par ou impar")

// function parOUImpar (numero) {
//     if(numero % 2 == 0){
//         alert (`o numero ${numero} é par`)
//     }
//     else
//     alert(`o numero ${numero} é impar`)
  
// }
// parOUImpar(numero)


// let primeiro = Number(prompt("Digite um número "))
// let segundo = Number(prompt("digite outro número"))
// let escolha = prompt ('Escolha uma operação\nA) Soma\nB) Subtração\nC) Divisão\nD) Multiplicação')

// function somar(numero1,numero2){
//     alert (`soma ${numero1+numero2}`)
// }
// function subtrair(numero1,numero2){
//     alert (`subtração ${numero1-numero2}`)
// }
// function divisao(numero1,numero2){
//     alert (`Divisão ${numero1/numero2}`)
// }
// function multiplicar(numero1,numero2){
//     alert (`Multiplicação ${numero1*numero2}`)
// }

// switch(escolha.toUpperCase()){
//     case "A":
//         somar(primeiro, segundo)
//         break
//     case "B":
//         subtrair(primeiro, segundo)
//         break
//     case "C":
//         divisao(primeiro, segundo)
//         break
//     case "D":
//         multiplicar(primeiro, segundo)
//         break
//     default:
//     alert("opção invalida")
//         break
// }
   

function primeNumber (num){
    var num = 0;
    for (var i = 0; i <= num; i++){
        if ((num % 1 === 0) && (num % num === 0)){
            return (primeNumber(i));
        }
    }
}
console.log(primeNumber(num));

let num1 = Number(prompt("Digite um numero para verificar se ele é primo"))

function numeroPrimo (num){
    for(let i = 0; i <= num; i++){
        if ((num % 1 === 0) && (num % i === 0)){
        alert (`o ${num} é um numero primo`)
        }
        else{
            alert(`o ${num} não é primo`)
        }
    }
}

numeroPrimo(num1)