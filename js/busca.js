document.getElementById('send-button').addEventListener('click', function () {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() !== "") {
        // Exibe a mensagem do usuário
        const userMessage = document.createElement('div');
        userMessage.classList.add('mensagem', 'user-message');
        userMessage.innerText = userInput.value;
        chatBox.appendChild(userMessage);

        // Resposta automática do bot
        const botMessage = document.createElement('div');
        botMessage.classList.add('mensagem', 'bot-message');
        botMessage.innerText = `Aqui estão algumas sugestões de restaurantes italianos na região da Vila Olímpia em São Paulo, onde você consegue comer por até R$100 por pessoa:\n\nAbbraccio Cucina Italiana\nLocalizado no Shopping Vila Olímpia, o Abbraccio oferece pratos italianos clássicos em um ambiente acolhedor. Entre os destaques, estão o Carbonara di Roma e o Polpettone Pomodoro. Eles também oferecem pão italiano de entrada como cortesia da casa.\nEndereço: Avenida Paulista, 2064, Piso Jardins, São Paulo, SP\nFaixa de preço: $$\n\nPiero - Cozinha Italiana\nO Piero serve pratos tradicionais italianos com bom custo-benefício, em um ambiente simples e acolhedor. O Filé à Parmegiana e o Oswaldo Aranha são os pratos mais recomendados da casa.\nEndereço: Rua Ponta Delgada, 76 (esquina com Rua Bugio), São Paulo, SP\nFaixa de preço: $$\n\nTimo Cucina\nO Timo Cucina é conhecido por seu ambiente moderno e pratos italianos contemporâneos, com massas, risotos e pizzas como opções. Ele também oferece um buffet de saladas no almoço, que é uma boa escolha para quem quer algo mais leve.\nEndereço: Avenida Presidente Juscelino Kubitschek, São Paulo, SP\nFaixa de preço: $$`;

        chatBox.appendChild(botMessage);

        // Limpa o campo de entrada
        userInput.value = "";

        // Rola para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
