// for(let i=0; i <101; i=i+1){
//     document.getElementById('teste').innerHTML += i +", ";
// }
var ano = new Date().getFullYear();
for(let i = ano; i>=1900; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

const carros = ["Gol","Fusca","Brasilia","Del Rey","Chevette"];

var tamanho = carros.length;

for(let i=0; i<tamanho;i++){
    document.getElementById("teste2").innerHTML +=carros[i] + "-";
}
