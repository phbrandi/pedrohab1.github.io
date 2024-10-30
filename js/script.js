

document.addEventListener('DOMContentLoaded', function() {

    text = document.querySelector('input[type="text"]')    

    submit = document.querySelector('button[type="submit"]')

    ul = document.querySelector('ul')

    submit.addEventListener('click', function(event){

        li = document.querySelector('li')
        li_prime = li.cloneNode(true)
        label = document.querySelector('label')
        label_prime = label.cloneNode(true)
        span = document.querySelector('span')
        span.innerHTML = text.value
        ul.appendChild(li_prime)

        event.preventDefault()

    })

})