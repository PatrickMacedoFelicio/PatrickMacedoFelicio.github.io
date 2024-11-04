const screens = document.querySelectorAll('.screen');
const nextScreenBtns = document.querySelectorAll('.nextScreenBtn'); // Seleciona todos os botões com a classe nextScreenBtn

// Array para armazenar as telas já exibidas
let remainingScreens = [...screens];

// Função para exibir uma tela aleatória sem repetição
function showRandomScreen() {
    if (remainingScreens.length === 5) {
        window.location.href = "final.html";
        return;
    }

    // Ocultar todas as telas
    screens.forEach(screen => screen.style.display = 'none');

    // Selecionar uma tela aleatória dentre as restantes
    const randomIndex = Math.floor(Math.random() * remainingScreens.length);
    const selectedScreen = remainingScreens[randomIndex];

    // Exibir a tela selecionada
    selectedScreen.style.display = 'block';

    // Remover a tela exibida do array para não ser repetida
    remainingScreens.splice(randomIndex, 1);
}

// Adiciona o evento de clique para todos os botões com a classe nextScreenBtn
nextScreenBtns.forEach(button => {
    button.addEventListener('click', showRandomScreen);
});

// Mostrar a primeira tela ao carregar a página
showRandomScreen();



function fuja(){
    var btNao = document.getElementById('nao')

    var larguraJanela = window.innerWidth
    var alturaJanela = window.innerHeight

    var maxX = larguraJanela - btNao.offsetWidth
    var maxY = alturaJanela - btNao.offsetHeight

    var aleatorioX = Math.floor(Math.random() * maxX )
    var aleatorioY = Math.floor(Math.random() * maxY)

    btNao.style.left = aleatorioX + "px";
    btNao.style.top = aleatorioY + "px";
}


document.getElementById("playSoundButton").addEventListener("click", function() {
    const audio = document.getElementById("audioPlayer");
    audio.play();
  });