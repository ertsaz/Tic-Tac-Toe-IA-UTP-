let estadoDelTablero;
let isloop = true
// DESCRITCION: Crea el espacio de trabajo desde p5.js 
function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
    estadoDelTablero = new EstadoDelTablero(1);
}

// DESCRIPCION : funcion que dibuja el tablero del juego en la pagina web
function draw(){
    
    estadoDelTablero.Mostrar()
}

// DESCRIPCION: En espera por la accion de un jugador sobre el area
function mousePressed() {
    estadoDelTablero.mousePressed()
}