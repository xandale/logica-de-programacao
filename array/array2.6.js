let produtos=[]
let precos=[]

for(cont=0;cont<5;cont++){
    let produto =prompt('Digite o nome do produto?')
    produtos.push(produto)
    let preco =Number( prompt('Digite o preço do produto?'))
    precos.push(preco)
}
let soma=Number= precos[0] + precos[1] + precos[2] + precos[3] + precos[4]

alert(`Os preços dos produtos ficaram\n${produtos[0]} custa R$${precos[0]}\n${produtos[1]} custa R$${precos[1]}\n${produtos[2]} custa R$${precos[2]}\n${produtos[3]} custa R$${precos[3]}\n${produtos[4]} custa R$${precos[4]}\n e o total da compra ficol R$${soma}`)