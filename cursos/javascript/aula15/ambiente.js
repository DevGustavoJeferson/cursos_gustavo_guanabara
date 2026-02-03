let num = [ 'Primeiro valor' , 4 , 3 , 2 , 1 ]

console.log(`Valor do vetor é: ${num}`)
console.log(`O valor do índice 3 é: ${num[3]}`)
console.log(`Lembre-se que o primeiro valor é o índice 0: ${num[0]}`)

num.push('Valor Adicionado')

console.log(`Adicionamos um valor a mais no nosso Array: ${num[5]}`)

console.log('Tamanho do nosso array: ' + num.length + ' elementos')

console.log(`Observe os valores organizando-se em ordem crescente: ${num.sort()}`)

num.push(2)

console.log(`Se adicionarmos o valor, depois de organizarmos, ele fica no final: ${num}`)

console.log(`Agora vamos organizar o valor adicionado: ${num.sort()}`)

console.log(`Todos os valores do nosso array, listados de 1 por 1: `)
for(let pos = 0; pos < num.length ; pos++){
    console.log(`Valor = ${num[pos]} | Índice = ${pos}`)
}

for(let pos in num){
    console.log(`Simplificação ${num[pos]}`)
}

console.log(`Qual posição está o valor 4? [${num.indexOf(4)}]`)
