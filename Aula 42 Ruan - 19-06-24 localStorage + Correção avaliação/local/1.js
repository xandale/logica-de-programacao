// SALVAR INFORMAÇÃO
// const seriePreferida = 'breakin bad'
// localStorage.setItem('serie','breaking bad')

// Importar paragrafo
const paragrafoPergunta = document.querySelector('#pergunta')

// Buscar informação
const serieDoLocalStorage = localStorage.getItem('serie')
// Verificar se a informação antes de mostrar
if(serieDoLocalStorage != null){
alert(` a serie armazenada é ${serieDoLocalStorage}`)
// caso possua perguntar “Qual outra série você gosta além de${nomeDaSerie}?
    paragrafoPergunta.textContent = `Qual outra série você gosta além de ${serieDoLocalStorage}`
 }
//else{
//     alert('Não a serie armazenada no local storage')
// }
