let botao = document.querySelector('button')
let paragarafo = document.querySelector('p')
let contador = 0
botao.onclick=() =>{
    contador = contador + 1 
    
    paragarafo.textContent=contador
}