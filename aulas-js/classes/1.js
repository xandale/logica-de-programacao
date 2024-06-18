
// nome da classe começa com letra maiuscula 
class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;

    }
    buzina(){
        return this.modelo  + ' Buzinou: Biiiii';
    }
}


const uno = new Carro ('Fiat',"Uno",2001);
const gol = new Carro('Volkswagen',"gol",2013);
console.log (uno.buzina());
console.log (gol.buzina());




//objeto
// const carro = {
//     marca: "Fiat",
//     modelo: "Uno",
//     ano: 2001
// }