let Tablero;

// DESCRITCION: Crea el espacio de trabajo desde p5.js 
function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
    Tablero = new Tablero();
}

// DESCRIPCION : funcion que dibuja el tablero del juego
function pantalla(){
    Tablero.Mostrar();
}