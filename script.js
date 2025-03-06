const messageContainer = document.getElementById('messageContainer');
const revealButton = document.getElementById('revealButton');
const backgroundMusic = document.getElementById('backgroundMusic');

// Función para revelar el mensaje romántico
revealButton.addEventListener('click', () => {
    messageContainer.style.opacity = 1;
    revealButton.style.display = 'none';
    backgroundMusic.play();
    generateStars(100); // Crea estrellas
});

// Función para crear estrellas en el fondo
function generateStars(num) {
    const scene = document.getElementById('scene');
    for (let i = 0; i < num; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        scene.appendChild(star);
    }
}

// Inicia la música de fondo automáticamente después de 5 segundos
window.addEventListener('load', () => {
    setTimeout(() => {
        backgroundMusic.play();
    }, 5000);
});