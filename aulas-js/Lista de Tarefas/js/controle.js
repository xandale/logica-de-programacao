 let contador = 0;
 let input = document.getElementById('inputTarefa')
 let btnAdd = document.getElementById('btn-add')
 let main = document.getElementById('areaLista')


 function addTarefa() {
    //Pegar o valor digitado no input
    let valorInput = input.value;

    //Se não for vazio, nem nulo, nem indefinido
    if((valorInput !=="") && (valorInput !==null) && (valorInput!==undefined)){
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id"icone_${contador}" class="fa-regular fa-circle"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="fa-solid fa-trash"></i> Deletar</button>
            </div>
        </div>`;
        //Adicionar novo item no main
        main.innerHTML += novoItem;

        //Zerar os campos
        input.value = "";
        input.focus();
    }
 }

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe=="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id)
        icone.classList.remove('fa-regular fa-circle');
        icone.classList.add('fa-solid fa-circle-check');
        //adiciona filho = vai a tarefa para o final
        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id)
        icone.classList.remove('fa-solid fa-circle-check');
        icone.classList.add('fa-regular fa-circle');
    }
}

 //Usando a tecla enter no lugar do button adicionar
 //addEventListener = java script presta atenção no que ira acontecer
 // evento keyup = Quando tecla alguma coisa
 input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
 })