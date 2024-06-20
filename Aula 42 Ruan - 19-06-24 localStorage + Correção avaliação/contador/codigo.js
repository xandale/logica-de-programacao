const elemento = document.querySelector('#contador')

// 1- Tentar buscar o valor do contador no localStorage
let contadorArmazenado = localStorage.getItem('contador')
// 2- Verificar o valor do contador
console.log(`O contador é ${contadorArmazenado}`)
// Situação 1- contador já tem valor
if(contadorArmazenado) {
    // Aumentar mais 1 no contador
    contadorArmazenado++
    // Atualizar o valor do contador no localStorage
    // localStorage.setItem('contador', contadorArmazenado)
}
// Situação 2- contador não tem valor
else {
    // Mandar valor inicial como 1
    contadorArmazenado = 1
    // localStorage.setItem('contador', contadorArmazenado)
}
localStorage.setItem('contador', contadorArmazenado)
elemento.textContent = `Contador de visitas: ${contadorArmazenado}`