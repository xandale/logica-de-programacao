function buscarCEP(){
    let input = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/'+input+'/json/');
    ajax.send();
    
    ajax.onload = function(){
    // document.getElementById('area').innerHTML = this.responseText;
    // let obj = JSON.parse(this.responseText);
    // alert(obj.ddd)
        // document.getElementById('texto').innerHTML = this.responseText;
        //Trasformei o texto em objeto
        let obj = JSON.parse(this.responseText);
        //Peguei os valores que eu queria
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;
        //Mostrei no html
        document.getElementById('texto').innerHTML = "Rua: " +logradouro+"<br>Cidade: " +cidade+"<br>Estado: "+estado;
    } 
}


