let virus = []
let bacterias = []
let todas = []
let ambas = []
let quantidade = Number(prompt('Quantas doenças voçê deseja cadastrar?'))
for (let cont = 0; cont < quantidade; cont++) {
    let doenca = prompt("Qual doença você deseja cadastrar?")
    let tipo = prompt("Ésta doença é trasmitida por opção\n A)Virus\nB)Bacterias\nC)Ambos").toUpperCase()
    if (tipo == 'A') {
        virus.push(doenca)
        todas.push(doenca)
    }
    else if (tipo == 'B') {
        bacterias.push(doenca)
        todas.push(doenca)
    }
    else if (tipo == 'C') {
      ambas.push(doenca)
      todas.push(doenca)
    }
    else {
        alert("Opção invalida")
    }
}
alert(`Doenças transmitidas por virus: ${virus.join(", ")}\nDoenças transmitidas por bacterias: ${bacterias.join(", ")}\nDoenças transmitidas por ambas: ${ambas.join(", ")}\nTodas as doenças: ${todas.join(", ")}`)
