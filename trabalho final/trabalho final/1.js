
let todosFilme = []
function enviarFormulario(evento){
    // 1 evitar recaregamento da página
    evento.preventDefault()
    // 2 imporar elementos
    const inputFoto = document.querySelector('#foto').value
    const inputNomeFilme = document.querySelector('#nomeFilme').value
    const inputNomeAntagonista = document.querySelector('#nomeAntagonista').value
    const inputNomeAtor = document.querySelector('#nomeAtor').value
    const inputMotivacao = document.querySelector('#motivacao').value
    // 3 adicionar nomes no filme das listas

    let filme = [inputFoto,inputNomeFilme,inputNomeAtor,inputNomeAntagonista,inputMotivacao]

    // 4 Adicionar no array filmes
    todosFilme.push(filme)
    // teste
    console.log(todosFilme)
    // chmar função para exibir no HTML
    atualizar_div_filmes()
}
    
    // 5 Saida de Dados

   

function atualizar_div_filmes(){

    let div = document.querySelector ('#listafilmes')
    div.innerHTML = ''    
    // for para exibir cada filme no HTML
    for(let i = 0; i < todosFilme.length; i++){
        let saida =`<div id="${i}"class="filme">
        <img class="imgfilme" src="${todosFilme[i][0]}">
        <p class="titulofilme"><b>${todosFilme[i][1]}</b></p>
        <p class="textofilme"><b>Autor:</b> ${todosFilme[i][2]}</p>
        <p class="textofilme"><b>Vilão:</b> ${todosFilme[i][3]}</p>
        <p class="textofilme"><b>Motivação:</b> ${todosFilme[i][4]}</p>
        <button onclick="deletar(${i})" class="delete"><b>Excluir</b></button></div>`;
        div.innerHTML += saida
    }
    
}// localStorage.setItem(inputFoto,inputNomeFilme,inputNomeAntagonista,inputNomeAtor,inputMotivacao)

//Botao de excluir
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}




