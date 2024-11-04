// Array de palavras predefinidas
const words = ["Neymar123", "TentaMeHakiarVAI", "Lindinho321", "EuSouLinda2004", "BatataFrita4Ever", "Neymar_Eu_Te_Amo", "#AmigaSuaLouca123", "Od3ioJAVA", "FechadoComC#", "AmoWeb<3", "N4oQueroEstudar"];

// Seleciona aleatoriamente uma palavra do array
const randomWord = words[Math.floor(Math.random() * words.length)];

// Seleciona o contêiner onde a palavra será exibida
const wordContainer = document.getElementById("wordContainer");

// Função para exibir a palavra com animação de fade-in
function displayWord(word) {
    // Para cada letra, cria um span e aplica a animação
    word.split('').forEach((letter, index) => {
        const letterSpan = document.createElement("span");
        letterSpan.classList.add("letter");
        letterSpan.style.animationDelay = `${index * 0.1}s`; // Define um delay para cada letra
        letterSpan.textContent = letter;
        wordContainer.appendChild(letterSpan);
    });
}

// Exibe a palavra aleatória ao carregar a página
displayWord(randomWord);