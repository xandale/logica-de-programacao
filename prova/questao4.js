let tarefa = []
let opcao = 0
let cont = 0
while (cont != 5) {
    let opcao = prompt("Escolha uma das opções?\na) Adicionar uma tarefa ao final do Array)\nb) Adicionar uma tarefa prioritária (no início do Array)\nc) Remover a primeira tarefa\nd) Remover a última tarefa\ne) Listar tarefas\nf) Encerrar o programa")

    switch (opcao.toLocaleUpperCase()) {
        case "A":
            let novo = prompt("Qual o nome da tarrefa de deseja adicionar?")
            tarefa.push(novo)
            break

        case "B":
            let novo1 = prompt("Qual o nome da tarrefa de deseja adicionar?")
            tarefa.unshift(novo1)
            break

        case "C":
            tarefa.shift()
            break


        case "D":
            tarefa.pop()
            break


        case "E":
            alert(tarefa)

            break


        case "F":
            alert(tarefa)
            cont = 5
            break

        default:
            alert("Opção invalida")
            break
    }
}
