// Adicione este trecho para esconder a página atual e mostrar a próxima página com animação
document.getElementById('btn-iniciar').addEventListener('click', function () {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.next-page').style.display = 'block';
    showPhrase(0);  // Adiciona a exibição da primeira frase ao clicar em iniciar
});

// Mantenha este trecho para controlar o índice da frase atual
let currentPhraseIndex = 0;
const phrases = document.querySelectorAll('.phrase');
const nextPage = document.querySelector('.next-page'); // Adicione esta linha para selecionar a próxima página

// Adicione este trecho para mostrar a próxima frase ao clicar em "Próximo"
document.getElementById('btn-proximo').addEventListener('click', function () {
    if (currentPhraseIndex < phrases.length - 1) {
        currentPhraseIndex++;
        showPhrase(currentPhraseIndex);
    }
    else {
        // Se atingir a última frase, adicione a lógica para ir para a próxima página
        // (pergunta "Quer sair comigo de novo?")
        nextPage.innerHTML = `
            <div id="pergunta">Quer sair comigo de novo?
            😳</div>
            <button id="btn-sim" class="nav-button">Sim</button>
            <button id="btn-nao" class="nav-button">Não</button>
        `;
        document.getElementById('btn-sim').addEventListener('click', function () {
            alert('Ta livre dia 17/12? Responde Zap lobinha 🐺');  // Adicione a lógica para a opção "Sim" se necessário
        });

        document.getElementById('btn-nao').addEventListener('click', function () {
            // Mantenha o tamanho do botão fixo
            const btnNao = document.getElementById('btn-nao');
            btnNao.style.width = '100px'; // Defina a largura desejada
            btnNao.style.height = '50px'; // Defina a altura desejada
        
            // Calcule posições aleatórias dentro dos limites da janela
            const maxX = window.innerWidth - btnNao.offsetWidth;
            const maxY = window.innerHeight - btnNao.offsetHeight;
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
        
            // Mova o botão para as posições aleatórias calculadas
            btnNao.style.position = 'absolute'; // Necessário para mover o botão
            btnNao.style.left = `${randomX}px`;
            btnNao.style.top = `${randomY}px`;
        });

        nextPage.style.display = 'block';
        nextPage.classList.add('fade-in');
    }
});


// Mantenha este trecho para mostrar a frase anterior ao clicar em "Anterior"
document.getElementById('btn-anterior').addEventListener('click', function () {
    if (currentPhraseIndex > 0) {
        currentPhraseIndex--;
        showPhrase(currentPhraseIndex);
    }
});

// Mantenha esta função para controlar a exibição das frases
function showPhrase(index) {
    phrases.forEach((phrase, i) => {
        if (i === index) {
            phrase.style.display = 'block';
        } else {
            phrase.style.display = 'none';
        }
    });
}


