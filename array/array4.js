
// 1)) Solicite para o usuÃ¡rio a informaÃ§Ã£o de 6 notas, adicione cada uma delas ao final de um Array, ao final realize a mÃ©dia das notas descartando a maior e a menor. Mostra na tela a mÃ©dia.
let notas = []
for(let contador = 0; contador < 6; contador++) {
    let nota = Number(prompt('Digite um nota'))
    // Adicionar a nota no array
    notas.push(nota)
}

console.log(notas)
// Ordenando a lista em ordem crescente
notas.sort((atual, proximo) => atual - proximo)
console.log(notas)
// Remover a menor (primeira)
notas.shift()
console.log(notas)
// Remover a maior (ultima)
notas.pop()
console.log(notas)
let soma = notas[0] + notas[1] + notas[2] + notas[3]
let media = soma / 4 
console.log(media)