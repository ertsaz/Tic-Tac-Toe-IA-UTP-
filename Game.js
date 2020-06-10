let w;
let h;

function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
}

function draw() {
    background(255);
    strokeWeight(4);

    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
   
}