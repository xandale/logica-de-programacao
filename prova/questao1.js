let idade = prompt("Qual a sua idade?")
// Verificar se a idade inserida é menor de 18
if (idade < 18) {
    alert("Você é menor de idade")
}
// Verificar se a idade inserida está entre 18 e 59
else if (idade > 17 && idade < 60) {
    alert("Você é adulto")
}
// Verificar se a idade inserida é 60
// resto
else {
    alert("Você é idoso")
}