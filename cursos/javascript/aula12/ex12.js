var hora_sistema = new Date()
var hora = hora_sistema.getHours()
console.log(`Agora é ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 12) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}