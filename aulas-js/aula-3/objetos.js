// objetos são variaveis com varios objetos dentro ex:
// var carro = { marca: "ford", modelo: "ka", ano: 2015, placa: ABC - 1234 };
// embora o var e o let possan sem usados para criar objetos é mais comun usar o const pois assim o  objeto se torna constante.
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    // um metodo é uma funçao dentro do objeto como no exemplo
    buzina: function(){alert('Biiiii')},
    completo: function(){
        return "A marca é"+this.marca+" e o modelo é:"+this.modelo;
    }
};
// quando se determina o valor dos objetos como acima eles são chamados de literais. 

// console.log(carro);

// carro.buzina();

console.log(carro.completo())
