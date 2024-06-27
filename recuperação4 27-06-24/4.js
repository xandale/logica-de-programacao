let contador = 0
function adicionarComentario(evento){
    evento.preventDefault()
    // 2- Importar os elementos
    const inputMensagem = document.querySelector('#comentario').value
    const paragrafoMensagens = document.querySelector('#listaComentarios')
    const paragrafoContador = document.querySelector('#contadorComentarios')
    // 3- Lógica de contagem e inserção das informações no HTML
    // Aumentar contagem
    contador++
    // Inserir valores nos parágrafos
    paragrafoContador.textContent = contador
    // Outra forma de inserir valor no parágrafo
    // paragrafoContador.innerHTML = contador
    paragrafoMensagens.textContent += inputMensagem + ' '
}
