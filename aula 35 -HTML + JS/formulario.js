function enviarFormulario (eventoRecebido){
//evitar caregamento da pagina
eventoRecebido.preventDefault()
//importar o formulario do HTML
const formulario = document.querySelector('form')
// criar formulario com os dados do formuário
const dadosFormulario = new FormData(formulario)
// buscar os valores do formulário pelo name
const valorNome = dadosFormulario.get('nome_usuario')
const valorEmail = dadosFormulario.get('email_usuario')
const valorMensagem = dadosFormulario.get('mensagem_usuario')
// Exibir os valores do formulario

alert(`valore:${valorNome,valorMensagem,valorEmail}`)
}