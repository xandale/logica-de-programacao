const lista = ['dexter','breaking bad']
// Na hora de salvar, usar o stringify para transformar em string
localStorage.setItem('series',JSON.stringify(lista))

// Na hora de recuperar, usar o parse para voltar a ser Array
const series = JSON.parse(localStorage.getItem('serie'))
console.log(series)


// function enviarSerie(evento){
//     evento.preventDefault()
//     // Buscar informação no input
//     const inputSerie = document.querySelector('#id_serie').value
//     // Salvar informação
//     localStorage.setItem('serie', inputSerie)
//     // Atualizar o parágrafo da pergunta
//     paragrafoPergunta.textContent =`Qual outra série você gosta além de ${inputSerie}`
// }

// // Importar o paragrafo da pergunta
// const paragrafoPergunta = document.querySelector('#pergunta')

// // Buscar informação
// const serieDoLocalStorage = localStorage.getItem('serie')
// // Verificar se há informação armazenada
// if (serieDoLocalStorage){
//     // Existe alguma serie no localStorage
//     // Perguntar Qual outra série você gosta além de ${serieDoLocalStorage}?
//     paragrafoPergunta.textContent = `Qual outra série você gosta além de ${serieDoLocalStorage}?`
// } 
