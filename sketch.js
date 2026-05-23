// Variables, cantidad de columnas y filas
let columnas = 30;
let filas = 30;
let espaciado; // define espaciado
let estado = "calma";

function setup() {
  createCanvas(600, 600); // crear lienzo
     
  // define el tamaño de cada celda de la grilla
  espaciado = width / columnas;
  
  // genera que los rectángulos roten desde su centro.
  rectMode(CENTER);
  
  // elimina bordes
  noStroke();
}

// movimiento
function draw() {
  // El fondo conserva una opacidad de 40 para generar un efecto de estela cinética
  background(15, 15, 20, 40);

  // Bucle anidado para construir la grilla matricial
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      // Cálculo del centro geométrico de cada celda
      let x = i * espaciado + espaciado / 2;
      let y = j * espaciado + espaciado / 2;

      dibujarCelda(x, y); // Lógica modular
    }
  }
}

// FUNCIÓN PROPIA: Controla el comportamiento visual e interactivo de cada módulo
function dibujarCelda(x, y) { 
  // INPUT CONTINUO: Mide la distancia geométrica al cursor del mouse
  let distancia = dist(x, y, mouseX, mouseY);

  // MAP(): Mapea la distancia interactiva al tamaño del elemento
  let tamano = map(distancia, 0, width, espaciado, 5);
  let angulo = map(mouseX, 0, width, 0, TWO_PI);

  // RANDOM(): Se aplica un sutil destello aleatorio a la saturación del color.
  let variacionLuminica = random(-15, 15);

  push(); // Guarda la matriz de transformación actual
  translate(x, y); // Mueve el origen al centro geométrico de la celda

  // COLOR DINÁMICO: Factorizado aquí para evitar repetición de código
  let r = map(mouseX, 0, width, 0, 255);
  let g = 100 + variacionLuminica; // El random genera una vibración óptica de color
  let b = map(mouseY, 0, height, 255, 0);
  fill(r, g, b);

  // MÁQUINA DE ESTADOS (Condicionales que definen el comportamiento óptico)
  if (estado === "calma") {
    // Estado 1: Geometría estable, el ángulo cambia suavemente con la posición horizontal del mouse
    rotate(angulo);
    ellipse(0, 0, tamano * 0.6);

  } else if (estado === "estres") {
    // Estado 2: Los módulos rotan en función de su cercanía con el puntero
    rotate(angulo + distancia * 0.01);
    rect(0, 0, tamano * 0.8, tamano * 0.8);

  } else if (estado === "caos") {
    // Estado 3: Rotación continua en el tiempo combinada con la distorsión del mouse
    rotate(frameCount * 0.05 + angulo);
    triangle(
      -tamano / 2, tamano / 2,
      0, -tamano / 2,
      tamano / 2, tamano / 2
    );
  }

  pop(); // Restaura la matriz de transformación
}

// INPUT TECLADO: Cambia los estados globales del sistema dinámico
function keyPressed() {
  if (key === '1') {
    estado = "calma";
  } else if (key === '2') {
    estado = "estres";
  } else if (key === '3') {
    estado = "caos";
  }
} 