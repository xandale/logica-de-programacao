

const pessoa = ['alexandre','goedert','22','aluno']; // exemplo de array
               // iten 0     iten 1 iten 2  iten 3

// para mostrar o ultimo iten do array 
// pessoa.length para mostrar o número de itens no array que no caso acima é 4 - o 1 já que o array começa apartir do 0 ficando 3 e no  caso  mostraria a palavra aluno.
 

// alert (pessoa[pessoa.length-1])

// adicionar item no array no final do array

pessoa.push('Brasileiro')

console.log (pessoa)

// outro metodo para adicionar no final do array

pessoa[pessoa.length]="Casado"

// alert(pessoa)
// caso seja adicionado um array num valor maior que ele exe: casado no [10] sendo que nosso array tem 5 itens ele adicionaria mais 4 espaços vazios para colocar o nosso iten no  10.

// para saber se algo é um array 

// Array.isArray(pessoa)

//alert(Array.isArray(pessoa)); // caso verdadeiro true caso falso false
// join para trocar os separadores dos arrays
document.getElementById('teste').innerHTML= pessoa.join(" * ")

// (push) adiciona no ultimo item 
// (pop) remove o ultimo item
// shift remove o primeiro item da lista
// (unshift) adiciona ão primeiro item 
// (splice) adiciona elementos na posição que você defenir
// (slice) fatia a matriz a partir da posição que você defenir
// (sort) para ordenar os itens em ordem alfabética
// (reverse) para reverter a orden