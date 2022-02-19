function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'Sem Título-1.png'
    document.body.style.background = '#a3937c'
}else if(hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'Sem Título-2.png'
    document.body.style.background = '#b0721b'
}else{
    //boa noite
    img.src = 'Sem Título-3.png'
    document.body.style.background = '#161e20'
}
}