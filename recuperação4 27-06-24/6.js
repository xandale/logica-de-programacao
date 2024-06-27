function multiplicar(evento) {
    // 1- Evitar que a página recarregue
    evento.preventDefault()
    // 2- Importar os elementos
    const inputNumero1 = document.querySelector('#multiplicador1').value
    const inputNumero2 = document.querySelector('#multiplicador2').value
    const paragrafoResultado = document.querySelector('#resultadoMultiplicacao')
    // 3- Fazer a multiplicação
    const multiplica = parseInt(inputNumero1) * parseInt(inputNumero2)
    // 4- Exibir a multiplicação no parágrafo
    paragrafoResultado.textContent = 'Resultado = '+multiplica
}