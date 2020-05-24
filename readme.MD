AHO ML / AI Workshop - Spring 2020
==================================

Code and links to relevant course materials for the AHO ML/AI workshop.

For the workshop we recommend using a modern browser, such as [Chrome](https://www.google.com/chrome/), [Firefox](https://www.mozilla.org/en-US/firefox/new/) or [Safari](https://www.apple.com/safari/).

Most of the exercises can be done in the [p5.js editor](https://editor.p5js.org/), but it's also possible to download the code in this repository, edit and run the code examples locally on your computer.

For those of you who are interested in editing code locally on your computer, it's possible to use either Notepad (on Windows) or TextEdit (on Mac), but we recommend downloading a more advanced code editor such as [VS Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/).

If you want to run the code examples in this repository, you'll need to set up a local webserver. You can do this by either using the Chrome extension [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en):

* install the Chrome extension [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)
* Start the extension
* Click `choose folder` and point to the folder with these files.

or using [Python](https://www.python.org/) (which should be installed by default on Mac) :

* Open `Terminal` app
* Browse to the folder with these files via `cd` command
* run `python -m SimpleHTTPServer 8887`

After this, you should be able to go to `http://localhost:8887` in your browser, and browse the files in this folder.

## Day 1 : Intro to Machine Learning / classification

Intro to p5.js:
* p5.js editor : https://editor.p5js.org/
* get started with p5.js : https://p5js.org/get-started/
* p5.js reference : https://p5js.org/reference/

Basic p5.js examples:
* Changing color of background : https://editor.p5js.org/auduno/sketches/zxc0Sx_8N
* Drawing a rectangle to canvas : https://editor.p5js.org/auduno/sketches/1QyFc6DS5
* Animated circle : https://editor.p5js.org/auduno/sketches/JxPvAFIdR
* Drawing text to canvas : https://editor.p5js.org/auduno/sketches/ecoP857SC
* Drawing an image to canvas : https://editor.p5js.org/auduno/sketches/gPZNIxFZG
* Setting up a webcam : https://editor.p5js.org/auduno/sketches/7x2BF9vor
* Playing sound : https://editor.p5js.org/auduno/sketches/FVRuyGz8w
* Adding buttons (to for instance play and stop music) : https://editor.p5js.org/auduno/sketches/u4PxBJvZ6
* Generating sound with p5 oscillator : https://editor.p5js.org/auduno/sketches/IvAlNYPAD
* Generating speech with p5 speech : https://editor.p5js.org/auduno/sketches/bQapdgSOi
* Adding some HTML outside canvas : https://editor.p5js.org/auduno/sketches/kYfuqZM7a

ML5js examples in p5.js editor:
* Image classification : https://editor.p5js.org/auduno/sketches/Z_U6BPK3g
* Image classification (with webcam) : https://editor.p5js.org/auduno/sketches/gkWssn0Es
* Audio classification : https://editor.p5js.org/auduno/sketches/0IkUY99f7
* Object detection with Coco-SSD : https://editor.p5js.org/auduno/sketches/4OBrXYka
* PoseNet : https://editor.p5js.org/auduno/sketches/9sHWX67Bx

Teachable machine models in p5.js:
* Image classification (with webcam) : https://editor.p5js.org/auduno/sketches/9gNqp00Qd
* Audio classification : https://editor.p5js.org/auduno/sketches/LGa7ekHAY
* PoseNet : https://editor.p5js.org/auduno/sketches/VaMqUyZJO

Examples of combining teachable machine models to do something in p5.js :
* Recognition of hand signals : https://editor.p5js.org/auduno/sketches/Pg6HudXJW
* Audio control : https://editor.p5js.org/auduno/sketches/8bQUExhTX
* Medal + cheers with posenet : https://editor.p5js.org/auduno/sketches/OCo40cnQ7

Resources:
* [p5.js](https://p5js.org/)
* [ml5js](https://ml5js.org/)
* [Some more details on PoseNet](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5)
* [Teachable Machine](https://teachablemachine.withgoogle.com)
