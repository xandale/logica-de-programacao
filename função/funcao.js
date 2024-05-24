//   function processarAposReceber(meDeUmaFuncao){
//     let nome = prompt ('Qual é o seu nome?')
//     meDeUmaFuncao(nome)
//   }
// processarAposReceber(function(nomeRecebido){
//     alert("Feliz aniversario")
// })


// let lista = [1,2,3,4,5,6,7,8]

// //array.filter(callback)

// let listaPares = lista.filter(itenRodando => {
//     console.log (`estou rodando o ${itenRodando}`)
//     return itenRodando % 2 == 0
// } )

// console.log(listaPares)   



// let numero = [1,2,3,4,5,6,7,8,9,10]

// let listaPares = numero.every(function(valorAtual){
//     return valorAtual % 2 == 0
// })
// alert(listaPares)

// let mostrarConvite = function(nomeConvidado,data,horario,local,nomeNoivos){
//     alert(`Óla ${nomeConvidado},\n lhe convido para o dia${data}, ás ${horario} horas, no local ${local}, prestigiar o casamento de ${nomeNoivos}.`)
// }
// let nome = prompt ('Qual é o nome do convidado?')

// mostrarConvite(nome,'23/05', '20', 'Igraja', 'João e Maria')
// mostrarConvite(nome,'23/06', '21', 'Praia', 'João e Maria')
// mostrarConvite(nome,'23/07', '22', 'Campo', 'João e Maria')


let jogadores=[]

for(let i=1;i<=10;i++){
    let inscricao = Number (prompt (`Digite a inscrição do ${i}° jogdores`))
// Armazenado o número da inscrição
    jogadores.push(inscricao)
}
// Analizando lista de jogadores
let timeImpar = jogadores.filter(jogador => jogador % 2 != 0 )
let timePar = jogadores.filter(jogador => jogador % 2 == 0 )
// Comparar  a quantidade de cada lista
if (timeImpar.length == timePar.length){
    alert('Os times estão equilibrados')
} else{
    alert('Os times não estão equilibrados')
}
