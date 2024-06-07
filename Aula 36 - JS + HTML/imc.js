function enviarFormulario(eventoRecebido){
    //evitar caregamento da pagina
    eventoRecebido.preventDefault()
    //importar o formulario do HTML
    const formulario = document.querySelector('form')
    // criar variavel com os dados do formuário
    const dadosDoFormulario = new FormData(formulario)
     // buscar os valores do formulário pelo id
    const valorNome = dadosDoFormulario.get('campoNome')
    const valorAltura = dadosDoFormulario.get('campoAltura')
    const valorNome = dadosDoFormulario.get('campoNome')
    const valorNome = dadosDoFormulario.get('campoNome')
    console.log(valorNome)
}