function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas,`
    if (hora >= 5 && hora <= 12){
        img.src = 'manha-foto.jpg'
        msg.innerHTML += ` tenha um Bom Dia!`
        document.body.style.background = '#FFB03D'
        img.style.outline = '2px solid #FFB03D'
        
    } 
    else if (hora > 12 && hora <= 18){
        img.src = 'tarde-foto.jpg'
        msg.innerHTML += ` tenha uma Boa Tarde!`
        document.body.style.background = '#CC883A'
        img.style.outline = '2px solid #CC883A'
    }
    else {
        img.src = 'noite-foto.jpg'
        msg.innerHTML += ` tenha uma Boa Noite`
        document.body.style.background = '#291d1c'
        img.style.outline = '2px solid #291d1c'
    }
}