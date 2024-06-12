
function mudarCor() {
    //Importar o elemento HTML no JS
    const body = document.querySelector('body')
    // Mudar a cor de fundo usando o style
    body.style.backgroundColor = 'green'
    // Mudar a cor do texto
    body.style.color = 'yellow'
    // Aumentar tamanho do texto
    body.style.fontSize = "30px"
    // Alterar font do site
    body.style.fontFamily = "sans-serif"
    // Alinhamento do texto
    body.style.textAlign = "center"
    // sublinhado
    body.style.textDecoration = "underline"
    // 

}

function mudarQuadrados() {
    //Importar o elemento HTML no JS
    const quadrado1 = document.querySelector("#quadrado1")
    const quadrado2 = document.querySelector("#quadrado2")
    // Mudar altura dos elementos
    quadrado1.style.height = "200px"
    quadrado2.style.height = "400px"
    // Mudar com de fundo
    quadrado1.style.backgroundColor = "red"
    quadrado2.style.backgroundColor = "blue"
    // Mudar a largura dos elementos
    quadrado1.style.width = '200px'
    quadrado2.style.width = '400px'
    // Mudar margem
    quadrado1.style.margin = '10px'
    quadrado2.style.margin = '10px'
    // Mudar o padding
    quadrado1.style.padding = '20px'
    quadrado2.style.padding = '20px'
    // Mudar a borda
    quadrado1.style.border = "5px solid purple"
    quadrado2.style.border = "5px solid brown"
    // Deixar borda arredondada
    quadrado1.style.borderRadius = "20px"
    quadrado2.style.borderRadius = "20px"
}
function esconderTexto() {
    //Importar o elemento HTML no JS
    const divSumir = document.querySelector('#div-sumir')
    // Para ocultar o elemento da página, usar display: none
    // divSumir.style.display = "none"
    // Fazer o elemento aparecer
    if (divSumir.style.display == "none") {
        divSumir.style.display = "block"
    } else {
        divSumir.style.display = "none"
    }
}
function ativarFlex() {
    // Importar body para manipular
    const body = document.querySelector('body')
    // Ativar display flex
    body.style.display = "flex"
    // Deixar elemento na direção da calona
    body.style.flexDirection = "column"
    // centralizar no eixo transversal da coluna (linha)
    body.style.alignItems = 'center'
    // Alinha no eixo principal (coluna)
    body.style.justifyContent = 'space-between'
}
// Incluir imagens de fundo em uma div
// style.backgroudImage = "url('imagem.jpg')'
// style.backgroundSix=ze = "cover"

function alterarPosicaoImagem() {
    // importa imagem
    const imagem = document.querySelector('img')
    // Deixar a posição fixa
    imagem.style.position = 'fixed'
    // Definir em qual local da página ela vai ficar
    imagem.style.top = '10px' // topo
    imagem.style.right = "10px" // direita


    
}