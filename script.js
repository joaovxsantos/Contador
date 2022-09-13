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
        let passo = Number(intervalo.value)
        p.innerText = "Contando: "

        if (passo > parseInt(fim.value)) {
            alert('Passo inválido!')
        }

        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }

        if (iniciomv < parseInt(fim.value)) {
            for (i = iniciomv; i <= parseInt(fim.value); i += passo) {


                p.innerText += ` ${i} \u{1F449}`

            }
        } else {

            for (i = iniciomv; i >= parseInt(fim.value); i -= passo) {

                p.innerText += ` ${i} \u{1F449}`


            }
        }
        p.innerText += `\u{1F3C1}`

    }
}








