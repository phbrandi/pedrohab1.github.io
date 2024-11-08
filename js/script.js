

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
            
            textInput.value = '';  
           
            ul.scrollTop = ul.scrollHeight;
        }
    });
});