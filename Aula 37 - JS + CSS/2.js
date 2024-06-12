// exercicio 1
// Criar a função
function mudaCor() {
    //Importar o elemento HTML no JS
    const paragrafo = document.querySelector('#paragrafo')
    // Mudar a cor do texto
    paragrafo.style.color = "green"
    // Mudar texto
    paragrafo.textContent = "Estou verde"
}
// exercicio 2
function mudarparaVerde() {
    //Importar o elemento HTML no JS
    const quadrado = document.querySelector("#quadrado")
    // Mudar cor da div
    quadrado.style.backgroundColor = "green"
}
function mudarCorAmarela() {
    //Importar o elemento HTML no JS
    const quadrado = document.querySelector("#quadrado")
    // Mudar cor da div
    quadrado.style.backgroundColor = "yellow"
}
function voltarParaVerde() {
    //Importar o elemento HTML no JS
    const quadrado = document.querySelector("#quadrado")
    // Mudar cor da div
    quadrado.style.backgroundColor = "blue"
}
// exercicio 3
function corEscolhida() {
    //Importar o elementos HTML no JS
    const body = document.querySelector('body')
    const cor = document.querySelector('#nomeCor')
    // Mudar cor de fundo que o usuario digitar usando .value para mudar para o valor que foi digitado
    body.style.backgroundColor = cor.value
}