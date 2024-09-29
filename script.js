let redvalue, greenvalue, bluevalue

setInterval(function () {
    redvalue = Math.floor(Math.random() * 255)
    greenvalue = Math.floor(Math.random() * 255)
    bluevalue = Math.floor(Math.random() * 255)

    document.body.style.backgroundColor='rgb('+redvalue+','+greenvalue+','+bluevalue+')'
    document.body.style.transition='all 2s ease'
}, 2000)