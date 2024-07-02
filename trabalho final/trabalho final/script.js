let lista_filmes = []
class filme{
    constructor(foto,titulo,autor,data,genero,duracao,sinopse){
        this.foto = foto;
        this.titulo = titulo;
        this.autor = autor;
        this.data = data;
        this.genero = genero;
        this.duracao = duracao;
        this.sinopse = sinopse;
    }
    adicionar(){
        lista_filmes.push(this)
    }
}
function adicionar_filme(foto,titulo,autor,data,genero,duracao,sinopse){
    let ad = new filme(foto,titulo,autor,data,genero,duracao,sinopse)
    ad.adicionar()
    atualizar_div_filmes(ad)
}
function cadastrar_filme(event){
    event.preventDefault()
    let foto = document.getElementById("foto").value
    let titulo = document.getElementById("titulo").value
    let autor = document.getElementById("autor").value
    let data = document.getElementById("data").value
    let genero = document.getElementById("genero").value
    let duracao = document.getElementById("duracao").value
    let sinopse = document.getElementById("sinopse").value
    console.log(foto,titulo,autor,data,genero,duracao,sinopse)
    adicionar_filme(foto,titulo,autor,data,genero,duracao,sinopse)
}
function atualizar_div_filmes(ad){
    let div = document.querySelector("#listafilmes")
    if(lista_filmes.length > 0){
        localStorage.setItem("lista_filmes",JSON.stringify(lista_filmes))
        let coisas =""
        for(let j=0;j<lista_filmes.length;j++){
            let i=lista_filmes[j]
            coisas+= `<div class="filme">
                            <img class="imgfilme" src="${i.foto}">
                            <p class="titulofilme">${i.titulo}</p>
                            <p class="textofilme">Autor: ${i.autor}</p>
                            <p class="textofilme">Data de lançamento: ${i.data}</p>
                            <p class="textofilme">Gênero: ${i.genero}</p>
                            <p class="textofilme">Duração: ${i.duracao} Min</p>
                            <p class="textofilme">Sinopse: ${i.sinopse}</p></div>`
        }
        div.innerHTML = coisas
    }else{
        let cache = localStorage.getItem("lista_filmes")
        if(cache){
            lista_filmes = JSON.parse(cache)
            atualizar_div_filmes()
        }
    }
}
window.onload = atualizar_div_filmes()

function inicio(){
    hwindow.location.ref="index.html"
}
function viloes(){
    window.location.href="viloes.html"
}
function principais(){
    window.location.href="protagonista.html"
}
function cadastro(){
    let cadastro = document.querySelector("#divcadastro")
    cadastro.classList.toggle("oculto")
}