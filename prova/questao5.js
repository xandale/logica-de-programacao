
let fila = []
while (fila.length <= 5) {
    let opcao = prompt(" O que ocorreu?\n A) Entrou alguém na fila\n B) Saiu alguém da fila\n C) adiciona uma pessoa ao final da fila\n D) Remover a primeira pessoa da fila")
    switch (opcao.toLocaleUpperCase()) {
        case "A":
            let nome = prompt(" Qual nome da pessoa?")
            fila.push(nome)
            break
        case "B":
            fila.shift()
            break
        case "C":
            let nome2 = prompt(" Qual nome da pessoa?")
            fila.shift(nome)
            break
        case "D":
            fila.shift()
            break
        default:
            alert('opção invalida')

    }
}
alert(`A fila ao final está asim:\n${fila.join('\n')}`)