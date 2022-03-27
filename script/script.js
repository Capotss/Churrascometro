let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")
function calcular() {
    console.log("Calculando...")


    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value



    let carne = adultos * CarnePP(duracao) + ((criancas / 2) * CarnePP(duracao))
    let cerveja = adultos * CervejaPP(duracao)
    let bebidas = adultos * BebidaPP(duracao) + ((criancas / 2) * BebidaPP(duracao))

    resultado.innerHTML = ""
    resultado.innerHTML += `<h2>Você precisará de:</h2>`
    resultado.innerHTML += `<div class="lista">`
     + `<div class="result-block">`
     + `<p class="lp">${carne / 1000} Kg de carne<p>`
     + `<p class="lp">${bebidas / 1000} Litros de bebidas<p>`
     + `<p class="lp">${Math.ceil(cerveja / 355)} Latas de cerveja<p>`
     + `</div>`
     + `</div>`

}



function CarnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function BebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000

    }
}

function CervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200

    }
}