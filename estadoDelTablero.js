class EstadoDelTablero {
    //constructor: inicializa los atributos
    constructor(jugadorActual) {
        this.tablero = new Tablero(jugadorActual) // se crea un tablero
        this.jugadorActual = jugadorActual   // se asigna el jugador 0 --> IA & 1 --> humano
        this.turno = 1 - (2 * this.jugadorActual) // si jugadorActual es 1 --> turno = -1
        this.jugadores = ['O', 'X']                // se crean los juagodores x y o
        this.ganador = null                       // variable ganador en el juego   
    }

    //DESCRIPCION: Metodo que registra el mouse del ratón
    mousePressed() {
        // condicion donde turno(-1) == -1, se da el movimiento de X 
        if (isloop && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && this.turno == -1) {
            // optiene las coordenadas de el mouse y la transforma a valores estre 0->2
            let j = Math.floor(mouseX / w);
            let i = Math.floor(mouseY / h);
            // crea un tablero temporal
            let tableroTemp = this.tablero.tablero;
            // condicion que se serciora de que no este desocupado 
            // el tablero en la posicion pulsada por el jugador
            if (tableroTemp[i][j] != '')
                return;
            // si jugadorActual es 1 usara X en el tablero
            tableroTemp[i][j] = this.jugadores[this.jugadorActual];
            // opera el jugador actual para que el jugadorActual sea 0 
            this.jugadorActual = 1 - this.jugadorActual;
            // opera el turno para que el turno sea para el jugador O ejm: antes::turno(-1) -->  despues::turno(1)
            this.turno *= -1
            return;
        }
        // condicion donde turno(1) == 1, se da el movimiento de O
        if (isloop && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && this.turno == 1) {
            // optiene las coordenadas de el mouse y la transforma a valores estre 0->2
            let j = Math.floor(mouseX / w);
            let i = Math.floor(mouseY / h);
            let tableroTemp = this.tablero.tablero;

            if (tableroTemp[i][j] != '')
                return;
            tableroTemp[i][j] = this.jugadores[this.jugadorActual];
            this.jugadorActual = 1 - this.jugadorActual;
            this.turno *= -1
            return;
        }
    }
    //DESCRIPCION: Metodo que muestra el tablero actual con las X y O de haber
    Mostrar() {
        background(255);
        this.tablero.Mostrar()
    }
}