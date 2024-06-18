// function ativarContagem(){
//     //setTimeout(function, tempo em milisegundos)
//     //Executa uma função, depois de esperar um número especificado de milissegundos.
//     //Miu quer dizere miu milisegundos ou seja a função sera ezecutada a cada 1 segundo
//     // exe: 5000 = 5 segundos; 10.000 = 10 segundos.
//     // A função é ativada apenas uma veiz apos o tempo especificado
//     // document.getElementById('tempo').innerHTML = "Começou a contar!";
//     // tempo = setTimeout(function(){ 
//     //     document.getElementById('tempo').innerHTML = "Executou o setTimeout";
//     // },5000); 
// }
// clearTimeout() para a contagem
function pararContagem(){
    // clearTimeout(tempo);
    // document.getElementById('tempo').innerHTML = "Parou a contagem";


}
//setInterval(function, milliseconds)
// É o mesmo que setTimeout(), mas repete a execução da função continuamente.
   
function ativarContagem(){

    tempo = setInterval (function(){
        var cronometro = document.getElementById ('tempo').innerHTML;
        var soma =parseInt(cronometro)- 1;
        if(soma === 0){
            document.getElementById('tempo').innerHTML ='Tempo esgotado';
            pararContagem()
        }else{
            document.getElementById('tempo').innerHTML = soma;
            
        }
        
    },1000)

    
}
function pararContagem(){
    clearInterval(tempo);


}