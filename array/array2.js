let pai, mae
let filho = []
let div = document.getElementById('divSaida2')
function gen() {
    let num = []
    for (let i = 0; i < 26; i++) {
        let a = Math.ceil(Math.random() * 100)
        num.push(a)
    }
    return num
}
pai = gen()
mae = gen
    ()
for (let i = 0; i < 26; i++) {
    let a = (i % 2 == 0) ? pai[i] : mae[i]
    filho[i] = a
}
div.innerHTML += `mae: ${mae} <br>`
div.innerHTML += `pai: ${pai} <br>`
div.innerHTML += `filho: ${filho} <br>`