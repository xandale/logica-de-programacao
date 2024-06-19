function esconderTexto() {
    const divSumir = document.querySelector('.detalhes')
    
    if (divSumir.style.display == "none") {
        divSumir.style.display = "block"
    } else {
        divSumir.style.display = "none"
    }
}