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
        Item.text = `Valor ${num.value}`
        lista.appendChild(Item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}