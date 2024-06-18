// Manipular datas em JS

//Comando base para pegar a data
let data = new Date();
// console.log (data);

// Pegar ano com 4 digitos

let ano = data.getFullYear();
console.log('ano:',ano);

// Pegar o mês Atual
let mes = data.getMonth();
// Os meses começam em 0 e vão até 11
// console.log(mes +1);

// Mostrar o mês no formato escrito
const mesesDoAno = ['janeiro',' fevereiro', 'março', 'abril',' maio', 'junho', 'julho',' agosto', 'setembro', 'outubro', 'novembro' ,' dezembro']
let mesEscrito = mesesDoAno[data.getMonth()];
console.log('Mês:',mesEscrito);

// Pegar dia do mês 1 até 31
let diaMes = data.getDate();
console.log('Dia:',diaMes);

// Pegar o dia da semana de 0 até 6
let diaSemana = data.getDay();
console.log('Dia da semana:',diaSemana);
// Pegar o dia da semana escrito
const diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira' , 'sábado'];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log('Dia da semana escrito:',diaSemanaEscrito);

// Pegar a hora de 0 até 23
let hora = data.getHours();
console.log('hora',hora);
// Pegar minutos de 0 até 59
let minutos = data.getMinutes();
console.log('minutos',minutos);
// Pegar segundos de 0 até 59
let segundos = data.getSeconds();
console.log('Segundos',segundos);
// Pegar milisegundos de 0 até 999
let milisegundos = data.getMilliseconds();
console.log('milisegundos:',milisegundos);

// Pegar a data no padrão Brasileiro - Dia / Mês / Ano
let dataBr = data.toLocaleString('pt-BR',{dateStyle: "short"});
console.log('Data no formato Brasileiro:',dataBr)

// Pegar os valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() +1;
ano = d.getFullYear();
// Criar função para adicionar 0 no dia
function addZero(x){ return x <10 ? '0' + x : "" + x;}

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

// Comparar datas - maior ou menor. Ex: vencimentos
var hoje = new Date();
var vencimento = new Date(2025,0,15);

if(hoje > vencimento){
    console.log("Sua conta está vencida")
}else{
    console.log("Ainda não venceu, tudo certo!");
}
// Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2024,11,31)

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))

console.log(diferencaDias);