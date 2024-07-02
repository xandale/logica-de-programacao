// Função para capturar dados do formulário, salvar no localStorage e exibir na saída
function enviarFormulario(event) {
    event.preventDefault();

    // Captura dos valores do formulário
    const foto = document.getElementById('foto').value;
    const filme = document.getElementById('nomeFilme').value;
    const vilao = document.getElementById('nomeAntagonista').value;
    const ator = document.getElementById('nomeAtor').value;
    const motivacao = document.getElementById('motivacao').value;

    // Salvar no localStorage
    salvarDadosLocalStorage(foto, filme, vilao, ator, motivacao);

    // Adicionar na saída de dados
    adicionarVilao(foto, filme, vilao, ator, motivacao);

    // Limpar formulário
    document.getElementById('formulario').reset();
}

// Função para adicionar vilão na saída de dados
function adicionarVilao(foto, filme, vilao, ator, motivacao) {
    // Criar elementos HTML
    const divVilao = document.createElement('div');
    divVilao.classList.add('vilao');

    const imagem = document.createElement('img');
    imagem.src = foto;
    imagem.alt = "Foto do Vilão";
    divVilao.appendChild(imagem);

    const paragrafoFilme = document.createElement('p');
    paragrafoFilme.textContent = "Filme: " + filme;
    divVilao.appendChild(paragrafoFilme);

    const paragrafoVilao = document.createElement('p');
    paragrafoVilao.textContent = "Vilão: " + vilao;
    divVilao.appendChild(paragrafoVilao);

    const paragrafoAtor = document.createElement('p');
    paragrafoAtor.textContent = "Ator/Atriz: " + ator;
    divVilao.appendChild(paragrafoAtor);

    const paragrafoMotivacao = document.createElement('p');
    paragrafoMotivacao.textContent = "Motivação: " + motivacao;
    divVilao.appendChild(paragrafoMotivacao);

    // Botão para excluir
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener('click', function() {
        divVilao.remove();
        limparLocalStorage(); // Remover do localStorage
    });
    divVilao.appendChild(botaoExcluir);

    // Adicionar na saída
    document.getElementById('saida').appendChild(divVilao);
}

// Função para salvar dados no localStorage
function salvarDadosLocalStorage(foto, filme, vilao, ator, motivacao) {
    const vilaoData = {
        foto: foto,
        filme: filme,
        vilao: vilao,
        ator: ator,
        motivacao: motivacao
    };
    localStorage.setItem('ultimoVilao', JSON.stringify(vilaoData));
}

// Função para limpar localStorage ao excluir item da saída
function limparLocalStorage() {
    localStorage.removeItem('ultimoVilao');
}
