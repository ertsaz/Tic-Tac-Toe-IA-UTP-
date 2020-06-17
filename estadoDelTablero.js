class EstadoDelTablero {
    //constructor: inicializa los atributos
    constructor(jugadorActual) {
        this.tablero = new Tablero(jugadorActual)   // se crea un tablero
        this.jugadorActual = jugadorActual          // se asigna el jugador 0 --> IA & 1 --> humano
        this.turno = 1 - (2 * this.jugadorActual)   // si jugadorActual es 1 --> turno = -1
        this.jugadores = ['O', 'X']                 // se crean los juagodores x y o
        this.ganador = null                         // variable ganador en el juego   

        this.puntajes = {
            X: -10,
            O: 10,
            tie: 0
        };
    }

    //DESCRIPCION: Metodo que registra el mouse del ratón
    mousePressed() {
        // condicion donde turno(-1) == -1, se da el movimiento de X 
        if (continua && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && this.turno == -1) {
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
        }
    }

    movimientoIA() {
        // AI to make its turn
        let mejorPuntaje = Number.NEGATIVE_INFINITY;
        let mejor_i, mejor_j;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (this.tablero.tablero[i][j] == '') {
                    this.tablero.tablero[i][j] = this.jugadores[0];
                    let puntaje = this.minimax(this.tablero.tablero, 0, false);
                    this.tablero.tablero[i][j] = '';
                    if (puntaje > mejorPuntaje) {
                        mejorPuntaje = puntaje;
                        mejor_i = i;
                        mejor_j = j;
                    }
                }
            }
        }
        this.tablero.tablero[mejor_i][mejor_j] = this.jugadores[0];
        this.jugadorActual = 1 - this.jugadorActual;
        this.turno *= -1
    }

    minimax(tablero, profunidad, esMaximo) {
        let result = this.tablero.quienGana();
        if (result !== null) {
            return this.puntajes[result];
        }

        if (esMaximo) {
            let mejorPuntaje = Number.NEGATIVE_INFINITY;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Is the spot available?
                    if (tablero[i][j] == '') {
                        tablero[i][j] = this.jugadores[0];
                        let puntaje = this.minimax(tablero, profunidad + 1, false);
                        tablero[i][j] = '';
                        mejorPuntaje = Math.max(puntaje, mejorPuntaje);
                    }
                }
            }
            return mejorPuntaje;
        } else {
            let mejorPuntaje = Number.POSITIVE_INFINITY;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Is the spot available?
                    if (tablero[i][j] == '') {
                        tablero[i][j] = this.jugadores[1];
                        let puntaje = this.minimax(tablero, profunidad + 1, true);
                        tablero[i][j] = '';
                        mejorPuntaje = Math.min(puntaje, mejorPuntaje);
                    }
                }
            }
            return mejorPuntaje;
        }
    }

    //DESCRIPCION: Metodo que muestra el tablero actual con las X y O de haber
    Mostrar() {
        background(255);
        this.tablero.Mostrar();
        let ganadorP = createP('');
        this.ganador = this.tablero.quienGana();
        if (this.ganador) {
            if (this.ganador == 'tie')
                ganadorP.html(this.ganador);
            else {
                if (this.ganador == 'X')
                    ganadorP.html('Ganaste')
                else
                    ganadorP.html('La IA Gano')
            }
            continua = false
        }
    }
}