//DICHIARO VARIABILI X E Y
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight)
  noCursor();
}

function draw() {
  background(0)


//CICLO PER CREAZIONE RETTANGOLI
  for (let a = 10; a < windowWidth; a += 50) {
  for (let b = 10; b < windowHeight + 50; b += 50) {

//VARIABILI PER USARE IL MOVIMENTO DEL MOUSE
      let c = map(mouseX, 0, width, 0, 150);
      let d = map(mouseY, 0, height, 50, 255);
      noStroke()
      if (mouseY < height / 2) {
        fill(255, random(d), random(255), random(100))
      } else {
        fill(random(d), random(255), 200, random(100))
      }
      rect(a, b, c, d-50)
    }
  }

//CREAZIONE CERCHIO E SCRITTA COME CURSORE

  x = lerp(x, mouseX, 0.4);
  y = lerp(y, mouseY, 0.4);

  fill(255);
  stroke(255);
  ellipse(x, y, 50);

  fill(255)
  noStroke()
  textFont('Impact');
  textSize(20);
  textAlign(CENTER);
  text('MOVE THE DOT', x, y - 50);

}

//RIDIMENSIONARE FINESTRA

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
