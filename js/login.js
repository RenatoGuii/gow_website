/* Olho mágico para cobrir/descobrir senha */

let olhoSenha = document.querySelector('#olhoSenha')
var inputSenha = document.querySelector('#senha')


olhoSenha.addEventListener('click', function () {
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


