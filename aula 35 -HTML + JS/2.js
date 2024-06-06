const idade =  document.querySelector('#idade')
const nome = document.querySelector('#campo_nome')
let botao = document.querySelector('button')
const paragarafo = document.querySelector('#resultado')

botao.onclick=() => {
    if (idade.value >= 18){
        // alert('Parabéns, sua cateira de motorista está pronta')
        paragarafo.textContent = 'Parabéns, sua cateira de motorista está pronta🚗😀'
    }
    else{
        // alert(": Nada de carro para você agora…")
        paragarafo.textContent = 'Nada de carro para você agora…😪'
    }
}   