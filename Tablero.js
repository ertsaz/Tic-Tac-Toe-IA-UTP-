class Tablero {
    constructor() {

        this.tablero = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.w = width / 3;
        this.h = height / 3;
    }

    comprobarTres(a, b, c) {
        return a == b && b == c && a != '';
    }

    quienGana() {
        let ganador = null;
        for (let i = 0; i < 3; i++) {
            if (this.comprobarTres(this.tablero[i][0], this.tablero[i][1], this.tablero[i][2])) {
                ganador = this.tablero[i][0];
            }
        }

        // Vertical
        for (let i = 0; i < 3; i++) {
            if (this.comprobarTres(this.tablero[0][i], this.tablero[1][i], this.tablero[2][i])) {
                ganador = this.tablero[0][i];
            }
        }

        // Diagonal
        if (this.comprobarTres(this.tablero[0][0], this.tablero[1][1], this.tablero[2][2])) {
            ganador = this.tablero[0][0];
        }
        if (this.comprobarTres(this.tablero[2][0], this.tablero[1][1], this.tablero[0][2])) {
            ganador = this.tablero[2][0];
        }

        let espaciosVacios = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.tablero[i][j] == '') {
                    espaciosVacios++;
                }
            }
        }

        if (ganador == null && espaciosVacios == 0) {
            return 'tie';
        } else {
            return ganador;
        }
    }

    Mostrar() {
        background(255);
        strokeWeight(4);

        // Creacion de la cuadricula del juego #
        line(this.w, 0, this.w, height);
        line(this.w * 2, 0, this.w * 2, height);
        line(0, this.h, width, this.h);
        line(0, this.h * 2, width, this.h * 2);

        // Se muestran las X y O de los respectivos jugadores
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {

                let x = (this.w * j) + (this.w / 2);
                let y = (this.h * i) + (this.h / 2);
                let xr = this.w / 4;
                let yr = this.h / 4;

                if (this.tablero[i][j] == 'X') {

                    line(x - xr, y - yr, x + xr, y + yr);
                    line(x + xr, y - yr, x - xr, y + yr);
                }
                else if (this.tablero[i][j] == 'O') {
                    ellipseMode(CENTER);
                    ellipse(x, y, xr * 2, yr * 2);
                }
            }
        }
    }
}