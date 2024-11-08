document.addEventListener('DOMContentLoaded', function() {

    
    main = document.querySelector('main')
    as = document.querySelectorAll('a')

    for (a of as) {

        a.addEventListener('click', function(event) {

            // Obtém o elemento que foi clicado. Não podemos
            // usar a variável "a" diretamente aqui dentro,
            // pois o valor dela muda ao longo do loop.
            t = event.currentTarget

            p = t.querySelector('p')
            localStorage.setItem('nome', p.innerHTML)

        })

    }

})
