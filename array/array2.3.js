let fila = []

while (fila.length < 5){
    let opcao = prompt (" O que ocorreu?\n A) Entrou alguém na fila \n B) Saiu alguém da fila ")
    if (opcao.toUpperCase() == 'A'){
        let nome = prompt (" Qual nome da pessoa?")
        fila.push(nome)
    }   else if ( opcao.toUpperCase () == 'B'){
        fila.shift()
    }   else{
        alert ('opção invalida')
    }
}

alert (`A fila ao final está asim:\n${fila.join('\n')}`)