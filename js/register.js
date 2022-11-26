/* Olho mágico para cobrir/descobrir senha */

let olhoSenha = document.querySelector('#olhoSenha')
let olhoCSenha = document.querySelector('#olhoCSenha')
var inputCSenha = document.querySelector('#cSenha')
var inputSenha = document.querySelector('#senha')


olhoSenha.addEventListener('click', function () {
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

olhoCSenha.addEventListener('click', function () {
    if (inputCSenha.getAttribute('type') == 'password') {
        inputCSenha.setAttribute('type', 'text')
    } else {
        inputCSenha.setAttribute('type', 'password')
    }
})

