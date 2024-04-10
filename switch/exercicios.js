// PROGRMA PARA MOSTRAR A QUE GERAÇÃO PERTENCE
let idade = Number (prompt('Digite seu ano de nascimento?'))
    switch (true) {
        case idade < 1946:
            alert('sem geração')
            break
        case idade > 1945 && idade <1964:
            alert('Baby Boomers')
            break
        case idade > 1964 && idade < 1979:
             alert('geração X')
            break
        case idade > 1980 && idade < 1997:
            alert('Millennials')
            break
        case idade > 1996 && idade < 2010:
            alert('Gerção z')
            break
        case idade > 2010:
            alert('Geraçao Alfa')
            break   
    }
// // PROGRAMA PARA MOSTRAR QUANTOS DIAS TEM O MÊS
// let mes
// mes= Number (prompt( 'Em que mes estamos?'))
//     switch (mes) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log('Este mes tem 31 dias')
//             alert('Este mes tem 31 dias')
//             break
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log('Este mes tem 30 dias')
//             alert('Este mes tem 30 dias')
//             break
//         case 2:
//             console.log('Este mes tem 29 dias')
//             alert('Este mes tem 29 dias')
//             break
//         default:
//             console.log('mês invalido')
//             alert('mês invalido')
//     }
// CRIANDO UM BANCO
// let saldo, saldoInicial=500
// saldo = Number (prompt('Digite a operação a ser realizadaDigite\n1-Para Saldo\n2-Para Depósito\n3-Para Saque'))
// switch (saldo){
//     case 1:
//         alert('R$'+saldoInicial)
//         break
//     case 2:
//         let deposito = Number(prompt('Qual valor deseja depositar')) 
//         deposito = saldoInicial + deposito
//         alert('R$'+deposito)
//         break
//     case 3:
//         let saque = Number(prompt('Qual valor deseja sacar?'))
//         saque = saldoInicial - saque
//         alert('Resta R$'+saque)
//         break
// }
