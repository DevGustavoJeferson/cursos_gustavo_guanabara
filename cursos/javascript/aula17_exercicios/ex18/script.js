let num = document.getElementById('inum')
let lista = document.getElementById('ilst')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista((num.value), valores)) {
        valores.push(Number(num.value))
        let Item = document.createElement('option')
        Item.text = `Valor ${num.value} adicionado`
        lista.appendChild(Item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus
}

function analisar(){
    if(valores.length == 0){
        window.alert('Adicione valores')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores){
            soma += valores[pos]
            if (maior < valores[pos])
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        let media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor, informado é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor, informado é: ${menor}</p>` 
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>` 
        res.innerHTML += `<p>A media dos valores é: ${media}</p>` 
    }
}