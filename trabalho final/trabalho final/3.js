let todosFilme = [];

function enviarFormulario(evento) {
    // Evitar o recarregamento da página
    evento.preventDefault();

    // Coletar valores dos campos do formulário
    const inputFoto = document.querySelector('#foto').value;
    const inputNomeFilme = document.querySelector('#nomeFilme').value;
    const inputNomeAntagonista = document.querySelector('#nomeAntagonista').value;
    const inputNomeAtor = document.querySelector('#nomeAtor').value;
    const inputMotivacao = document.querySelector('#motivacao').value;

    // Criar objeto filme com os dados do formulário
    let filme = {
        foto: inputFoto,
        nomeFilme: inputNomeFilme,
        nomeAtor: inputNomeAtor,
        nomeAntagonista: inputNomeAntagonista,
        motivacao: inputMotivacao
    };

    // Adicionar o filme ao array todosFilme
    todosFilme.push(filme);

    // Atualizar a exibição dos filmes na página
    atualizar_div_filmes();
}

function atualizar_div_filmes() {
    let div = document.querySelector('#listafilmes');
    let saida = '';

    // Para cada filme em todosFilme, criar a estrutura HTML
    todosFilme.forEach((filme) => {
        saida += `<div class="filmes">
            <img class="imgfilme" src="${filme.foto}">
            <p class="titulofilme">${filme.nomeFilme}</p>
            <p class="textofilme">Ator: ${filme.nomeAtor}</p>
            <p class="textofilme">Vilão: ${filme.nomeAntagonista}</p>
            <p class="textofilme">Motivação: ${filme.motivacao}</p>
        </div>`;
    });

    // Atualizar o conteúdo da div #listafilmes com o conteúdo construído
    div.innerHTML = saida;
}

// Chamar atualizar_div_filmes inicialmente para exibir qualquer conteúdo existente
atualizar_div_filmes();
