// para pegar dia da semana
    function diaDaSemana(){
        var dia = new Date().getDay();
        console.log(dia)
    }


function verificaCor(){
    let cor = document.getElementById('cor').value;
    cor = cor.toLowerCase();

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break
    
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break
  
    
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
    
        case "rosa":
            document.body.style.backgroundColor = "pink";
            break
    
        case "laranja":
            document.body.style.backgroundColor = "orange";
            break;
 
        case "preto":
            docment.body.style.backgroundColor = "black";
            break;
   
        case "branco":
            document.body.style.backgroundColor = "white";
            break;
  
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
    
        default:

            document.getElementById("teste").innerHTML ="Nenhuma cor disponivel para:"+cor;
            break
    }

 

}

