const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition> 0 && marioPosition <80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    } 


}, 10)

// Supondo que você tenha uma função que detecte o fim do jogo
function gameOver() {
    // Esconder o container do jogo
    document.getElementById('game-container').style.display = 'none';
    // Mostrar a mensagem de Game Over e o botão de recarregar
    document.getElementById('game-over').style.display = 'block';
}

// Adicionando evento de clique ao botão de recarregar
document.getElementById('retry-button').addEventListener('click', function() {
    location.reload(); // Recarrega a página
});

// Exemplo de como você poderia chamar a função gameOver
// Aqui você deveria chamar essa função quando o jogo realmente terminar
// setTimeout(gameOver, 3000); // Chama gameOver após 3 segundos, por exemplo

document.addEventListener('keydown', jump)