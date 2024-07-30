const images = [
    'ge.png.jpeg',
    'dois.png.jpeg',
   'tres.png.jpeg',
   'quatro.png.jpeg'
];

let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById('polaroid-image');
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

setInterval(changeImage, 3000); // Troca a imagem a cada 3 segundos
