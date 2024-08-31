//Olivero Valentino 
// Comision 3 tp1
// link: https://www.youtube.com/watch?v=C_AcIvWg7SE
let columnas = 20;
let filas = 50;
let changeColors = false;
let obra;
let randomColors = new Array(10); // Array para almacenar colores aleatorios

function preload() {
  obra = loadImage('obra.png'); // Carga la imagen antes del setup
}

function setup() {
  createCanvas(800, 400);
  background(255);

  // Inicializa el array de colores aleatorios
  for (let i = 0; i < randomColors.length; i++) {
    randomColors[i] = color(0); // Por defecto negro
  }
}

function draw() {
  // Dibuja la imagen de la obra en el sketch
  image(obra, 0, 0, 400, 400);
  let w = width / 2 / columnas;
  let h = height / filas;

  noStroke();
  // Dibuja todos los rectángulos del fondo
  for (let i = 2; i <= 3; i++) {
    for (let j = 0; j < 10; j++) {
      if ((i + j) % 2 === 0) {
        fill(changeColors ? randomColors[j] : 0); // Negro o color aleatorio si changeColors es verdadero
      } else {
        fill(255); // Blanco
      }
      if (i === 2) {
        rect(i * 200, j * 20, 200, 20);
      } else {
        rect(i * 200, j * 20 + 200, 200, 20);
      }
    }
  }

  for (let i = 1; i >= 0; i--) {
    for (let j = 0; j < 10; j++) {
      if ((i + j) % 2 === 0) {
        fill(changeColors ? randomColors[j] : 0); // Negro o color aleatorio si changeColors es verdadero
      } else {
        fill(255); // Blanco
      }
      if (i === 1) {
        rect(400 + j * 20, 200, 20, 200);
      } else {
        rect(600 + j * 20, 0, 20, 200);
      }
    }
  }

  // Dibuja los círculos en el medio de la obra
  let cantCirculos = 6;
  let tamCirculos = w * 2;

  for (let k = cantCirculos; k > 0; k--) {
    if (k % 2 === 0) {
      fill(changeColors ? dameUnColorAleatorio() : 0); // Negro o color aleatorio si changeColors es verdadero
    } else {
      fill(255); // Blanco
    }
    ellipse(width * 3 / 4, height / 2, k * tamCirculos, k * tamCirculos);
  }
}

function dameUnColorAleatorio() {
  return color(random(255), random(255), random(255));
}

function keyPressed() {
  changeColors = !changeColors;
  for (let i = 0; i < randomColors.length; i++) {
    randomColors[i] = dameUnColorAleatorio();
  }
}
