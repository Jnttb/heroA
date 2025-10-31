let chicoObjt;

function preload() {
  chicoObjt = loadModel("base.obj");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(20);
  orbitControl();

  // Luz más suave y equilibrada
  ambientLight(120);
  directionalLight(150, 150, 150, 0, 0, -1);

  // Material con reflejo moderado
  specularMaterial(255);
  shininess(10);

  // Orientación horizontal
  rotateX(PI / 2);
  rotateY(PI);
  scale(100);

  model(chicoObjt);
}
