function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
    //Bom Dia!
    img.scr = 'bomdiacaraio004.png'
    document.body.style.background = '#D7E1FF'
} else if (hora >= 12 && hora < 18) {
    //Boa Tarde!
    img.src = 'boatardevelarispormim004.png'
    document.body.style.background = '#FAB0FF'
} else {
    //Boa Noite! 
    img.src =  'boanoitevelaris004.png'
    document.body.style.background = '#4B4B70 '
}



}