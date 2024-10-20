// TP#Final parte 1 
//Olivero Valentino y Ravizzoli Matias
// comisión 3
// link: https://youtu.be/QnojpAFdUyY
let ancho = 640;
let alto = 480;

let imagen = [];
let texto = [];


let pantallaActiva;
let pantallasBotSig = [1,3,5,6,7,8,10,11,12,13,14];

let sound;
let button;

function preload() {
  sound = loadSound('data/file.mp3'); // Cargar sonido
}

function setup() 
{
  createCanvas(ancho, alto);
  texto = loadStrings('data/textos.txt')
  pantallaActiva = 0;
  
    for (let i=0; i<=14; i++ ) {
    imagen[i] = loadImage("data/pantalla_"+nf(i, 2)+".png  ");
  }
   button = createButton('Encender/Apagar Sonido');
  button.position(5, 367);
  button.mousePressed(toggleSound); // Asignar función al botón
  sound.setVolume(0.2);
}


function draw() 
{
  background(139,0 ,0 );
  cursor('data/cursor.png');
    CargarTexto();
    CargarImagen();
  ControlImagen();
  

  


}

function mousePressed()
{
  if (pantallaActiva == 0) {pantallaActiva++}
  
  
  ControlClicks();
  
}

function ControlImagen()
{
  
  if (pantallasBotSig.includes(pantallaActiva))
  {
    DibujarBotonSiguiente();
  }
  
  if (pantallaActiva === 2 || pantallaActiva === 4)
  {
  DibujarBotonDecisiones();
  
  }
}

function ControlClicks()
{
  if (pantallasBotSig.includes(pantallaActiva))
  {
    ClickBotonSiguiente();
  } 
  else
  {
    if (pantallaActiva === 2 || pantallaActiva === 4)
    {
      ClickBotonDecisiones()
    } 
    else 
    { 
      if (pantallaActiva === 11 || pantallaActiva === 14)
      {
        pantallaActiva = 9;
      }
      else 
      {
        if (pantallaActiva == 9)
        {
          pantallaActiva = 0;
        }
      }
    }
  }
}



function DibujarBotonSiguiente()
{
  //x:560, 640
  //y: 0, 480
  fill(0,0,0,100);
  rect(600, 85, 35, 170);

}

function ClickBotonSiguiente()
{
  //x:560, 640
  //y: 0, 480
  
  if (pantallaActiva !== 11 && pantallaActiva !== 14)
  {
     if ((mouseX <= 635 && mouseX >= 600 && mouseY <= 255 && mouseY >= 85))
    {
      pantallaActiva++;
    }
  } 
  else
  {
    pantallaActiva = 9;
  }
}

function DibujarBotonDecisiones()
{
  //x:   0, 320          320, 640    
  //y: 400, 480          400, 480
  fill(255);
  rect(450, 410, 160, 50);
  fill(0)
  textFont('Magneto');
  textSize(18);
    text("Opción 2", 485, 440, );

  fill(255);
  rect(255, 410, 160, 50);
  fill(0)
      text("Opción 1", 295, 440, );
}

function ClickBotonDecisiones()
{
  //x:   0, 320          320, 640    
  //y: 400, 480          400, 480
  if (mouseX >= 440 && mouseX <= 600 && mouseY >= 410 && mouseY <= 450)
  {
    if (pantallaActiva === 2){
      pantallaActiva = 3;
    }
    else{
      pantallaActiva = 12;
    }
    
    console.log('boton 1');
  }
  if (mouseX >= 255 && mouseX <= 405 && mouseY >= 410 && mouseY <= 450)
  {
    if (pantallaActiva === 4){
      pantallaActiva = 5;
    }
    else{
      pantallaActiva = 10;
    }
  }
}
function CargarImagen()
{
 
 image(imagen[pantallaActiva], 0, 0, 640, 390);
}

function CargarTexto()
{
if (pantallaActiva < texto.length){
fill(255)
 textAlign(CORNER);
 textFont('Magneto');
 textSize(20);

   let lineHeight = 22; // Altura de línea
    let x = 5; // Margen izquierdo
    let y = 410; // Posición vertical inicial
    let currentText = texto[pantallaActiva];

    // Dividir el texto en líneas
    let words = currentText.split(" ");
    let line = "";

    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + " ";
      let testWidth = textWidth(testLine);

      if (testWidth > 300 - x * 2) { 
        text(line, x, y); 
        line = words[i] + " "; 
        y += lineHeight; 
      } else {
        line = testLine; 
      }
    }
    text(line, x, y); 
  } 

}

function toggleSound() {
  if (sound.isPlaying()) {
    sound.stop(); // Detener sonido si está sonando
  } else {
    sound.play(); // Reproducir sonido si no está sonando
  }
}
