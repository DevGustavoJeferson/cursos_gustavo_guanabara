function contar(){
    //Validando e convertendo os dados...
    var number_init = Number(window.document.querySelector('section > div > input#inum_init').value)
    var pass = Number(window.document.querySelector('section > div > input#ipass').value)
    var number_final = Number(window.document.querySelector('section > div > input#inum_final').value)
    var res = window.document.getElementById('res')

    if(number_init == 0 || pass <= 0 || number_final == 0){
        window.alert('Erro, faltam dados ou passo negativo')
    } else {
        //CONTAGEM CRESCENTE
        if(number_init > number_final){
            for(x = number_init ; x <= number_final ; x += pass){
            res.innerHTML += `👉🏻 ${x} `
        }
        //CONTAGEM REGRESSIVA
        }else {
            for(x = number_init ; x <= number_final ; x += pass){
            res.innerHTML += `👉🏻 ${x} `
        }
        res.innerHTML += `👉🏻🏁 Chegou!!`
    }
    }

}