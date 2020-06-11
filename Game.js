let estadoDelTablero;
let isloop = true
// DESCRITCION: Crea el espacio de trabajo desde p5.js 
function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
    estadoDelTablero = new EstadoDelTablero(1);
}

// DESCRIPCION: En espera por la accion de un jugador sobre el area
function mousePressed() {
    estadoDelTablero.mousePressed()
}
// DESCRIPCION : funcion que dibuja el tablero del juego en la pagina web
function draw(){
    if (isloop)
        //if (estadoDelTablero.turn == 1)
            // llamar a la IA
    estadoDelTablero.Mostrar()
}


