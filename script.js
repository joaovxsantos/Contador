let submit = document.querySelector('#submit')
submit.addEventListener('click', cont)


function cont() {


    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let intervalo = document.querySelector('#intervalo')
    let p = document.querySelector('#p1')

    if (inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0) {

        alert('Preencha todos os campos por favor!')
    } else {

        let iniciomv = parseInt(inicio.value)

        p.innerText = ""
        for (i = iniciomv; i < parseInt(fim.value); i++) {


            iniciomv += parseInt(intervalo.value)

            if (iniciomv > fim.value) {
                p.innerText += ""
            } else {
                p.innerText += `${iniciomv}.. 👉..  `
            }
        }
    }
}








