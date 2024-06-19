
let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
   

function somar(){
    const paragrafoResulatado = document.querySelector('#resultado')
  
    let resultado =Number
    resultado=  (numero1.value+numero2.value)
    paragrafoResulatado.innerHTML =resultado
    console.log(resultado)
} 
