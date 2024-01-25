function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Erro, verifique os dados novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', '/ModuloD/exercicio2/img/crianca-homem.png')
            } else if ( idade < 21){
                img.setAttribute('src', '/ModuloD/exercicio2/img/jovem-homem.png')
            } else if ( idade < 50){
                img.setAttribute('src', '/ModuloD/exercicio2/img/adulto-homem.png')
            } else {
                img.setAttribute('src', '/ModuloD/exercicio2/img/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', '/ModuloD/exercicio2/img/crianca-mulher.png')
            } else if ( idade < 21){
                img.setAttribute('src', '/ModuloD/exercicio2/img/jovem-mulher.png')
            } else if ( idade < 50){
                img.setAttribute('src', '/ModuloD/exercicio2/img/adulto-mulher.png')
            } else {
                img.setAttribute('src', '/ModuloD/exercicio2/img/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.</br>`
        res.appendChild(img)
        img.width = 200
        img.height = 200
    }
}