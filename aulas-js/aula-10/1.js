
// onclick  disparado quando recebe um click

// ondblclick disparado com click duplo

/*onmouseover disparado quando o mouse está sobre.

onmouseout disparado quando o mouse é movido para fora do elemento.

onmousemove disparado quando o mouse é movido no elemento.

onmousedown disparado quando o clique do botão foi pressionado.

onmouseup disparado quando o clique do botão é liberado.

onfocus disparado quando o elemento recebe o foco. Válido para input,

onchange disparado quando existe uma mudança no conteudo. "Ao mudar".

onblur disparado quando o elemento perde o foco.

onkeydown disparado quando uma tecla é precionada.

onkeypress disparado quando uma tecla é precionada e solta.

onkeyup disparado quando uma tecla é solta sobre um elemento

onload disparado quando a página terminou de ser carregada.

onresize disparada quando há um redimenciomnamento da janela.
*/








// onclick  disparado quando recebe um click

// function eventoClick(){
//     // alert ('acionou um evento de click')
//     document.body.style.backgroundColor = "yellow";
// }

// ondblclick disparado com click duplo

function eventoClick(){
    alert ('evento de click duplo')
  
}
// onmouseover
function viraVermelho(){
    let div = document.getElementById('teste');
    div.style.backgroundColor="red";
}
// onmouseout
function viraAzul(){
    let div = document.getElementById('teste');
    div.style.backgroundColor="blue";
}
// onmousemove
// function adicionaTexto(){
//      let p = document.getElementById('texto');
//      p.append('O mouse moveu <br>');
// }


