
let fotos = []

let nomeFilme = []

let nomeVilao = []

let nomeAtor = []

let motivacao = []

function enviarFormulario(evento){
    // 1 evitar recaregamento da página
    evento.preventDefault()
    // 2 imporar elementos
    const inputFoto = document.querySelector('#foto').value
    const inputNomeFilme = document.querySelector('#nomeFilme').value
    const inputNomeAntagonista = document.querySelector('#nomeAntagonista').value
    const inputNomeAtor = document.querySelector('#nomeAtor').value
    const inputMotivacao = document.querySelector('#motivacao').value
    // 3 adicionar nomes no final das listas

    localStorage.setItem(inputFoto,inputNomeFilme,inputNomeAntagonista,inputNomeAtor,inputMotivacao)
}