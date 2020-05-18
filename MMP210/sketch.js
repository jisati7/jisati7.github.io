//cc: http://blog.vidianindhita.com/2017/11/01/trying-to-copy-instagram-face-filters/

//
var capture;
var tracker
var w = 640, h = 480;
let radio;
let mic;

function preload() {
  specs = loadImage("glasses.png");
  topHat = loadImage("topHat.png");
  sunglasses = loadImage("sunglasses.png");
  goldtooth = loadImage("goldtooth.png");
  note = loadImage("note.png");
}

function setup() {
  capture = createCapture({
    audio: false,
    video: {
      width: w,
      height: h
    }
  }, function() {
    console.log('capture ready.');
  });

  capture.elt.setAttribute('playsinline', '');
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  colorMode(HSB);

  //create radio options
  radio = createRadio();
  radio.option("pennybag", 1);
  radio.option("goldtooth", 2);
  
  radio.style('width', '60px');
  radio.style('font-family', 'sans-serif');

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
  
  //mic setup
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  image(capture, 0, 0, w, h);
  
  var val = radio.value();
  
  if (val == 1) {
    drawPennyBags();
  }
  
  if (val == 2) {
    drawGoldtooth();
  }

  //hear output
  mic.connect();
  //voice level tracker
  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  image(note, width/4, -75 + y);
}

function drawPennyBags() {
  addTopHat();
  addSpectacles();

}

function drawGoldtooth(){
  addSunglasses();
  addLips();
}

function addSpectacles(){
  var positions = tracker.getCurrentPosition();

  for (var i = 0; i < positions.length; i++) {
    if (i == 33) {
      push();
      translate(-120, -70);
      image(specs, positions[i][0], positions[i][1]);
      pop();
    }

  }

}
function addTopHat(){
  var positions = tracker.getCurrentPosition();

  for (var i = 0; i < positions.length; i++) {
    if (i == 20) {
      push();
      translate(-100, -280);
      image(topHat, positions[i][0], positions[i][1]);
      pop();
    }

  }
}
function addSunglasses(){
var positions = tracker.getCurrentPosition();

  for (var i = 0; i < positions.length; i++) {
    if (i == 33) {
      push();
      translate(-170, -90);
      image(sunglasses, positions[i][0], positions[i][1]);
      pop();
    }

  }
}
function addLips(){
  var positions = tracker.getCurrentPosition();

  for (var i = 0; i < positions.length; i++) {
    if (i == 44) {
      push();
      translate(-15, -55);
      image(goldtooth, positions[i][0], positions[i][1]);
      pop();
    }

  }
}