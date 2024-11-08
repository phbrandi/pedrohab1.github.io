document.addEventListener('DOMContentLoaded', function() {

    nome = document.querySelector('.nome')
    nome.innerHTML = localStorage.getItem('nome')

})
