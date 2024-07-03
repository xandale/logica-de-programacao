// array
let lista_filmes = [];
// Salvar no navegador
let cache = localStorage.getItem("lista_filmes");
// Se houver personagem colocar no array
if (cache) {
    lista_filmes = JSON.parse(cache);
}

// Construindo um objeto para armazenar a entrada de dados
class personagem {
    constructor(foto, titulo, ator, vilao, motivacao) {
        this.foto = foto;
        this.titulo = titulo;
        this.ator = ator;
        this.vilao = vilao;
        this.motivacao = motivacao;
        this.id;
    }
}

// Função para adicionar um novo vilão
function adicionar_filme(foto, titulo, ator, vilao, motivacao) {
    
    let novopersonagem = new personagem(foto, titulo, ator, vilao, motivacao);
    // Adiciona o novo personagem
    lista_filmes.push(novopersonagem);

    novopersonagem.id = lista_filmes.length;
    // Chamando a função
    atualizar_div_filmes();
}

// Função para remover um personagem pelo ID
function remover_filme(id) {
    // Percorre a lista
    for (let i = 0; i < lista_filmes.length; i++) {
        // se encontrou o personagem com o ID
        if (lista_filmes[i].id == id) {
            // Remove o personagem
            lista_filmes.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("lista_filmes", JSON.stringify(lista_filmes));
    atualizar_div_filmes();
}

function enviarFormulario(event) {
    // Impede o caregamento padrão da página
    event.preventDefault();
    // Chamando html pelo ID
    let foto = document.getElementById("foto").value;
    let titulo = document.getElementById("nomeFilme").value;
    let ator = document.getElementById("nomeAtor").value;
    let vilao = document.getElementById("nomeAntagonista").value;
    let motivacao = document.getElementById("motivacao").value;
    
    adicionar_filme(foto, titulo, ator, vilao, motivacao);
}

// Atualizar filmes
function atualizar_div_filmes() {
    let div = document.querySelector("#listafilmes");
    if (lista_filmes) {
        // Atualizando os dados no localStorage
        localStorage.setItem("lista_filmes", JSON.stringify(lista_filmes));
        let conteudoHtml = ""; 
        // Saida de dados
        for (let filme of lista_filmes) {
            conteudoHtml += `<div class="filme">
                                <img class="imgfilme" src="${filme.foto}">
                                <p class="titulofilme">${filme.titulo}</p>
                                <p class="textofilme">Ator: ${filme.ator}</p>
                                <p class="textofilme">Vilão: ${filme.vilao}</p>
                                <p class="textofilme">Motivação: ${filme.motivacao}</p>
                                <button onclick="remover_filme(${filme.id})" class="btn-remover">Remover</button>
                            </div>`;
        }
        div.innerHTML = conteudoHtml;
    }
}
window.onload = atualizar_div_filmes;
