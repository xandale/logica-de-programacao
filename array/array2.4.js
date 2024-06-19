
let ano = 2010
let anos = []

while(ano<=2019){
    let alistamento = prompt(`Ouve alistamento no ano ${ano}  \n Opção (S) para sim\n Opção (N) para não`)

    if (alistamento.toUpperCase() == 'S'){
        anos.push(ano)
}
    else if (alistamento.toUpperCase() == 'N'){
    }
    ano++
}

anos.sort((atual, proximo) => atual - proximo)

alert(`Os anos em que ouve alistamento foram ${anos}`)