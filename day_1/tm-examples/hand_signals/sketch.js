let classifier;
let video;
let flippedVideo;
let result;
let speech;
let div;

// paste your url from teachable machine here
let modelURL = "https://teachablemachine.withgoogle.com/models/qEFSmRGzt/";

function preload() {
  // Load image classifier model before setting up canvas
  classifier = ml5.imageClassifier(modelURL + "model.json");
}

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  div = createDiv("Loading model...");
  
  flippedVideo = ml5.flipImage(video);
  speech = new p5.Speech(); 
  
  classifyVideo();
}

function draw() {
  image(flippedVideo, 0, 0);
}

function classifyVideo() {
  // classify video
  flippedVideo = ml5.flipImage(video)
  // call gotResult when classification is done
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}

function gotResult(err, results) {
  if (results.length > 0) {
    if (results[0].label != result) {
      // look at first (most likely) result
      if (results[0].label == 'Thumbs up') {
        div.html('Thumbs up');
        speech.cancel();
        speech.speak('Awesome!');
      } else if (results[0].label == 'Thumbs down') {
        div.html('Thumbs down');
        speech.cancel();
        speech.speak('Bad stuff!');
      } else if (results[0].label == 'No class') {
        div.html('');
      }
      result = results[0].label;
    }
  }
  
  // start a new classification
  classifyVideo();
}
