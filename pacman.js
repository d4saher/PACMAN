const canvas = document.getElementById('pacman');
const ctx = canvas.getContext('2d');

// Imágenes de los sprites
const pacmanImg = new Image();
//pacmanImg.src = 'ruta/a/tu/imagen/pacman.png';
// Repite esto para los fantasmas, manzanas y bolitas.

// Variables de configuración
const tileSize = 40; // Tamaño de cada casilla en el laberinto.
const numRows = 15;
const numCols = 20;

// Laberinto
const maze = [
    // Agrega aquí la estructura de tu laberinto
];