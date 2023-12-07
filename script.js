// Cria um botão para alternar entre modos claro e escuro
const toggleButton = document.createElement('button'); // Cria um elemento botão no documento
toggleButton.textContent = 'Modo Escuro'; // Define o texto do botão como 'Modo Escuro'
let darkMode = false; // Define uma variável para controlar o modo escuro

toggleButton.addEventListener('click', () => { // Adiciona um ouvinte de evento de clique ao botão
    darkMode = !darkMode; // Alterna entre verdadeiro e falso (modo escuro ou claro)
    if (darkMode) { // Verifica se está no modo escuro
        // Altera as propriedades de estilo do corpo da página para o modo escuro
        document.body.style.backgroundColor = '#222'; // Define a cor de fundo como cinza escuro
        document.body.style.color = '#fff'; // Define a cor do texto como branco
        toggleButton.textContent = 'Modo Claro'; // Atualiza o texto do botão para 'Modo Claro'
    } else { // Se não estiver no modo escuro
        // Altera as propriedades de estilo do corpo da página para o modo claro
        document.body.style.backgroundColor = '#fff'; // Define a cor de fundo como branco
        document.body.style.color = '#222'; // Define a cor do texto como cinza escuro
        toggleButton.textContent = 'Modo Escuro'; // Atualiza o texto do botão para 'Modo Escuro'
    }
});

document.body.appendChild(toggleButton); // Adiciona o botão ao final do corpo da página

// Função para transição entre páginas ao clicar nos botões
function slideTo(page) {
    document.body.style.opacity = 0; // Define a opacidade do corpo como 0 para uma transição suave
    setTimeout(function() { // Aguarda um intervalo de tempo antes de redirecionar para a próxima página
        window.location.href = page; // Redireciona para a página especificada após 500 milissegundos
    }, 500);
}


