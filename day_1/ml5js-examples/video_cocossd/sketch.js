let video;
let status;
let detector;
let detections;

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  detector = ml5.objectDetector('cocossd', modelReady);
  
  status = select("#status");
}

function draw() {
  image(video, 0, 0, width, height);

  if (detections) {
    for (let i = 0; i < detections.length; i++) {
      let objectX = detections[i].x;
      let objectY = detections[i].y;
      let objectWidth = detections[i].width;
      let objectHeight = detections[i].height;
      let objectClass = detections[i].label;
      noStroke();
      fill(0, 0, 0);
      text(objectClass, objectX, objectY - 5);
      noFill();
      strokeWeight(2);
      stroke(0, 255, 0);
      rect(objectX, objectY, objectWidth, objectHeight);
    }
  }
}

function modelReady(model) {
  status.html("Model loaded!");
  detect();
}

function detect() {
  detector.detect(video, gotResults);
}

function gotResults(err, results){
  if(err){
    console.log(err);
    return
  }

  detections = results;

  detect();
}