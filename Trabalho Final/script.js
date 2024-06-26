function calcularIMC() {
    var nome = document.getElementById("nome").value;
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    if (!nome || !altura || !peso) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    var imc = peso / (altura * altura);
    var resultado = document.getElementById("resultado");
    
    var classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    resultado.innerHTML = `
        <h2>Resultado do IMC para ${nome}</h2>
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Classificação: ${classificacao}</p>
    `;
}