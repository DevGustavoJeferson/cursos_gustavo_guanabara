var agora = new Date()
var dia_semana = agora.getDay() // Os dias da semana são representada por números de 0 a 6
console.log('Hoje é: ')
switch (dia_semana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    default:
        console.log('Sabado')
        break
}