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