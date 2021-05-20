let pais = document.getElementById('text')
let res = document.getElementById('res')


function verificar(){
    console.log(pais)
    res.innerHTML = ''
    res.innerHTML += `Seu pais é ${String(pais.value)}. </br>`
    if(pais.value.length == 0){
        res.innerHTML += 'Por favor digite um nome de pais.'
    }else {
        if(pais.value == 'brasil' || pais.value == 'Brasil' || pais.value == 'br'){
            res.innerHTML += 'Voce é Brasileiro.'
        }else{
            res.innerHTML += 'Voce é Estrangeiro.'
        }
    }
}
