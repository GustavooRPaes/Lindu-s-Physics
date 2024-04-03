// Fórmulas cinemáticas
function calcac() {
    var numero1c, numero2c, resultadoc

    numero1c = parseInt(document.getElementById('n1c').value)
    numero2c = parseInt(document.getElementById('n2c').value)
    resultadoc = numero1c / numero2c

    document.getElementById('visorc').innerHTML = resultadoc
}

function calcfc() {
    var numero1a, numero2a, resultadoa

    numero1a = parseInt(document.getElementById('n1a').value)
    numero2a = parseInt(document.getElementById('n2a').value)
    resultadoa = numero1a / numero2a

    document.getElementById('visora').innerHTML = resultadoa
}

function calch() {
    var numero1h, numero2h, numero3h, resultadoh

    numero1h = parseInt(document.getElementById('n1h').value)
    numero2h = parseInt(document.getElementById('n2h').value)
    numero3h = parseInt(document.getElementById('n3h').value)
    resultadoh = numero1h + numero2h * numero3h

    document.getElementById('visorh').innerHTML = resultadoh
}

function calcv() {
    var numero1v, numero2v, numero3v, resultadov

    numero1v = parseInt(document.getElementById('n1v').value)
    numero2v = parseInt(document.getElementById('n2v').value)
    numero3v = parseInt(document.getElementById('n3v').value)
    resultadov = numero1v * numero1v + 2 * numero2v * numero3v

    document.getElementById('visorv').innerHTML = resultadov
}

function calcp() {
    var numero1p, numero2p, numero3p, resultadop

    numero1p = parseInt(document.getElementById('n1p').value)
    numero2p = parseInt(document.getElementById('n2p').value)
    numero3p = parseInt(document.getElementById('n3p').value)
    numero4p = parseInt(document.getElementById('n4p').value)
    resultadop = numero1p + numero2p * numero4p + numero3p / 2 * (numero4p * numero4p)

    document.getElementById('visorp').innerHTML = resultadop
}
//Fim das fórmulas cinemáticas

//Fórmulas termodinâmicas
function calcc() {
    var numero1ca, numero2ca, resultadoca

    numero1ca = parseInt(document.getElementById('n1ca').value)
    numero2ca = parseInt(document.getElementById('n2ca').value)
    resultadoca = numero1ca + numero2ca

    document.getElementById('visorca').innerHTML = resultadoca
}

function calce() {
    var numero1e, numero2e, numero3e, resultadoe

    numero1e = parseInt(document.getElementById('n1e').value)
    numero2e = parseInt(document.getElementById('n2e').value)
    numero3e = parseInt(document.getElementById('n3e').value)
    resultadoe = 1.5 * numero1e * numero2e * numero3e
    
    document.getElementById('visore').innerHTML = resultadoe
}

function calcpr() {
    var numero1pr, numero2pr, resultadopr

    numero1pr = parseInt(document.getElementById('n1pr').value)
    numero2pr = parseInt(document.getElementById('n2pr').value)
    resultadopr = numero1pr * numero2pr
    
    document.getElementById('visorpr').innerHTML = resultadopr
}

function calcelec() {
    var numero1elec, numero2elec, resultadoelec

    numero1elec = parseInt(document.getElementById('n1elec').value)
    numero2elec = parseInt(document.getElementById('n2elec').value)
    resultadoelec = numero1elec * numero2elec
    
    document.getElementById('visorelec').innerHTML = resultadoelec
}

function calccorre(){
    var numero1corre, numero2corre, resultadocorre

    numero1corre = parseInt(document.getElementById('n1corre').value)
    numero2corre = parseInt(document.getElementById('n2corre').value)
    resultadocorre = numero1corre * numero2corre
    
    document.getElementById('visorcorre').innerHTML = resultadocorre
}