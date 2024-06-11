function enviarFormulario(eventoRecebido){
    //evitar recarregamento da pagina
    eventoRecebido.preventDefault()
    //importar o formulario do HTML
    const formulario = document.querySelector('form')
    // criar variavel com os dados do formuário
    const dadosDoFormulario = new FormData(formulario)
     // buscar os valores do formulário pelo id
    const valorNome = dadosDoFormulario.get('campoNome')
    const valorAltura = dadosDoFormulario.get('campoAltura')
    const valorPeso = dadosDoFormulario.get('campoPeso')
    const valorprofissao = dadosDoFormulario.get('campoProfissao')
    const valorfoto = dadosDoFormulario.get('campoFoto')
    //importar resultado 
    const paragrafoResulatado = document.querySelector('#texto-resultado')
    const imagemResultado = document.querySelector('#imagem-resultado')
    //cauculando o imc
   let  imc= valorPeso/(valorAltura*valorAltura)
    // console.log(imc)
    let classificacaoImc
    alert(imc)
switch(true){
    case imc < 18.5:
    classificacaoImc = 'Magreza'
    break
    case imc <= 24.9:
    classificacaoImc = 'Normal'
    break
    case imc < 29.9:
    classificacaoImc = 'Sobrepeso'
    break
    case imc < 39.9:
    classificacaoImc = 'Obesidade'
    break
    default:
    classificacaoImc= 'Obesidade Grave'

}
paragrafoResulatado.innerHTML = `Nome: ${valorNome}<br>Altuta: ${valorAltura}<br> Peso: ${valorPeso}<br>Profissão:${valorprofissao}`
// para imagem usamos o setAtribute
imagemResultado.setAttribute ('src',valorfoto)= imagemResultado
}