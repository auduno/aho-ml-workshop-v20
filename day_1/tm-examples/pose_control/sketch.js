// paste the url of the model you trained in teachablemachine here
let myURL = "https://teachablemachine.withgoogle.com/models/RZnsDRUWP/";
let modelURL = myURL + "model.json";
let metadataURL = myURL + "metadata.json";

let model, webcam, ctx, img, cheerSound;

function preload() {
  // load image before we start setup
  // note that this image has been uploaded (see sketch files to left)
  img = loadImage("medal_new.png");
  // load cheering audio
  soundFormats('mp3', 'ogg');
  cheerSound = loadSound('sports_crowd.mp3');
  cheerSound.playMode('sustain');
  cheerSound.loop();
}

async function setup() {
  // load the model and metadata
  model = await tmPose.load(modelURL, metadataURL);
  document.getElementById('status').innerHTML = "Setting up camera.";

  // Convenience function to setup a webcam
  let size = 300;
  let flip = true; // whether to flip the webcam
  webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop1);

  // append canvas to the DOM
  let canvas = document.getElementById('canvas');
  canvas.width = size;
  canvas.height = size;
  ctx = canvas.getContext('2d');
  
  // set status to ready
  document.getElementById('status').innerHTML = "Ready";
  
  // start playing sound with no volume
  cheerSound.setVolume(0.0, 0.01);
  cheerSound.play();
}

async function loop1(timestamp) {
  webcam.update(); // update the webcam frame
  await predict();
  window.requestAnimationFrame(loop1);
}

async function predict() {
  // Prediction #1: run input through posenet
  // estimatePose can take in an image, video or canvas html element
  let {
    pose,
    posenetOutput
  } = await model.estimatePose(webcam.canvas);
  // Prediction 2: run input through teachable machine classification model
  let prediction = await model.predict(posenetOutput);

  if (webcam.canvas) {
    ctx.drawImage(webcam.canvas, 0, 0);
  }
  
  if (pose) {
    // if class 1 is higher than some threshold
    if (prediction[1].probability > 0.95) {
      // then do stuff 
      sportsCheer(pose, true);
    } else {
      sportsCheer(pose, false);
    }
  }
}

function sportsCheer(pose, enable) {
  // do some math to figure out where to draw medal
  // and how large it should be
  let leftShoulder = pose.keypoints[5];
  let rightShoulder = pose.keypoints[6];
  let centerX = (leftShoulder.position.x + rightShoulder.position.x) / 2;
  let centerY = (leftShoulder.position.y + rightShoulder.position.y) / 2;
  let distance = Math.sqrt((rightShoulder.position.x - leftShoulder.position.x) ** 2 + (rightShoulder.position.y - leftShoulder.position.y) ** 2)
  let medalSize = distance * 0.7;
  
  if (enable) {
    // draw the medal
    ctx.drawImage(img.canvas, centerX - medalSize / 2, centerY - medalSize / 3, medalSize, medalSize);
    // enable sound
    cheerSound.setVolume(1.0, 0.01);
  } else {
    // disable sound
    cheerSound.setVolume(0.0, 0.01);
  }
}