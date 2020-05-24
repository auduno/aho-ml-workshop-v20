let classifier;
let status;
let x_coord;
let y_coord;

let modelURL = "https://teachablemachine.withgoogle.com/models/8fAki2_KP/";

function setup() {
  createCanvas(400, 400);
  background(220);
  let options = { probabilityThreshold: 0.7 };
  classifier = ml5.soundClassifier(modelURL + "model.json", options, modelReady);
  status = select("#status");
  
  x_coord = 150;
  y_coord = 150;
}

function draw() {
  clear()
  background(220);
  rect(x_coord, y_coord, 50, 50);
}

function modelReady() {
  status.html("Model ready, listening...");
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  let randomColorRed = random(255);
  let randomColorGreen = random(255);
  let randomColorBlue = random(255);
  // set the color of the background
  //background(randomColorRed, randomColorGreen, randomColorBlue);
  status.html("Label : "+results[0].label+", Confidence : "+results[0].confidence);
  if (results[0].label == 'Clap') {
    fill(randomColorRed, randomColorGreen, randomColorBlue);
    x_coord = x_coord - 10;
  } else if (results[0].label == 'Whistle') {
    fill(randomColorRed, randomColorGreen, randomColorBlue);
    x_coord = x_coord + 10;
  }
}