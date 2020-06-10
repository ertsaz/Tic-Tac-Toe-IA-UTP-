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

        line(this.w, 0, this.w, height);
        line(this.w * 2, 0, this.w * 2, height);
        line(0, this.h, width, this.h);
        line(0, this.h * 2, width, this.h * 2);
    }

}