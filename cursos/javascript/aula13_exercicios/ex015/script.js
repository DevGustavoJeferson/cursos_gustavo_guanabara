function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('iano')
    var res = document.getElementById('res')
    if(f_ano.value.length == 0 || f_ano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - f_ano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked){
            genero = ' Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','M_crianca-foto.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','M_adolescente-foto.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','M_adulto-foto.jpg')
            } else {
                //idoso
                img.setAttribute('src','M_idoso-foto.jpg')
            }
        } else if (sexo[1].checked){
            genero = 'a Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','F_crianca-foto.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','F_adolescente-foto.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','F_adulta-foto.jpg')
            } else {
                //idoso
                img.setAttribute('src','F_idoso-foto.jpg')
            }
        }
        res.innerHTML = `Detectamos um${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}