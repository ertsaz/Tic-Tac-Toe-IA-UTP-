let estadoDelTablero;
let continua = true
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
function draw() {
    if (continua)
        estadoDelTablero.Mostrar()
    if (continua)
        if (estadoDelTablero.turno == 1)
            estadoDelTablero.movimientoIA()
}


