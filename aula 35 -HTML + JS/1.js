//mudar Imagem

// 1- buscar o elemento no html

let imagem = document.querySelector('img')
console.log(imagem)

// 2- mudar o atributo

imagem.setAttribute('src','https://pbs.twimg.com/profile_images/1425857676110667778/JyjokcxD_400x400.jpg')

// Importar botoes e inputs

let inputIdade = document.querySelector('#id_idade')
let inputNome = document.querySelector('#id_nome')
let botao = document.querySelector('button')

// acionar alerta quando o botão for clicado

botao.onclick =  () => {
    console.log (inputIdade.value)
    console.log (inputNome.value)
    console.log (botao.value)
    alert (inputIdade.value)
    alert (inputNome.value)
    alert (botao.value)
}
