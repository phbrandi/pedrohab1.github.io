

// document.addEventListener('DOMContentLoaded', function() {

//     text = document.querySelector('input[type="text"]')    

//     submit = document.querySelector('button[type="submit"]')

//     ul = document.querySelector('ul')

//     submit.addEventListener('click', function(event){

//         li = document.querySelector('li')
//         li_prime = li.cloneNode(true)
//         label = document.querySelector('label')
//         label_prime = label.cloneNode(true)
//         span = document.querySelector('span')
//         span.innerHTML = text.value
//         ul.insertBefore(li_prime)
//         ul.appendChild(li_prime)

//         event.preventDefault()

//     })

// })

document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.querySelector('input[type="text"]');
    const submitButton = document.querySelector('button[type="submit"]');
    const ul = document.querySelector('.item-list');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const newItemText = textInput.value.trim();
        if (newItemText) {
            const li = document.createElement('li');
            li.classList.add('item');
            
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            const span = document.createElement('span');
            span.textContent = newItemText;

            label.appendChild(checkbox);
            label.appendChild(span);
            li.appendChild(label);
            ul.appendChild(li);
            
            textInput.value = '';  // Limpa o campo de entrada

            // Rola para o último item adicionado
            ul.scrollTop = ul.scrollHeight;
        }
    });
});