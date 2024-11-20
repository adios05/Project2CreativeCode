let midArray = [];
let bottomArray = [];
let WFArray = [];
let midIndex = 0;
let bottomIndex = 0;
let WFIndex = 0;
let theColors = ["#faaab3", "#6fb3fc", "##cd7cf2", "#23dbad", "##ffffff", "#000000"];
let randomColor = 0;
let mySound;

function preload() {
  // Load images in preload
  midArray[0] = loadImage("mids/black1.png");
  midArray[1] = loadImage("mids/Charcoal1.png");
  midArray[2] = loadImage("mids/creme1.png");
  midArray[3] = loadImage("mids/green1.png");
  midArray[4] = loadImage("mids/pink1.png");
  midArray[5] = loadImage("mids/blue1.png");
  midArray[6] = loadImage("bottoms/TransparentBG.png");

  bottomArray[0] = loadImage("bottoms/black2.png");
  bottomArray[1] = loadImage("bottoms/charcoal2.png");
  bottomArray[2] = loadImage("bottoms/creme2.png");
  bottomArray[3] = loadImage("bottoms/green2.png");
  bottomArray[4] = loadImage("bottoms/pink2.png");
  bottomArray[5] = loadImage("bottoms/blue2.png");
  bottomArray[6] = loadImage("bottoms/TransparentBG.png");

  WFArray[0] = loadImage("bottoms/TransparentBG.png");
  WFArray[1] = loadImage("Pinks/PINK.png");
  WFArray[2] = loadImage("Pinks/PinkBlue.png");
  WFArray[3] = loadImage("Pinks/PinkCreme.png");
  WFArray[4] = loadImage("Cremes/CremePink.png");
  WFArray[5] = loadImage("Blues/BluePink.png");
  WFArray[6] = loadImage("Cremes/CremeBlue.png");
  WFArray[7] = loadImage("Cremes/CREME.png");
  WFArray[8] = loadImage("Blues/BlueCreme.png");
  WFArray[9] = loadImage("Blues/BLUE.png");
  WFArray[10] = loadImage("Greens/GREEN.png");
  WFArray[11] = loadImage("Charcoal/CHARCOAL.png");
  WFArray[12] = loadImage("Blacks/BLACK.png");
  WFArray[13] = loadImage("Pinks/PinkGreen.png");
  WFArray[14] = loadImage("Pinks/PinkBlack.png");
  WFArray[15] = loadImage("Pinks/PinkCharcoal.png");
  WFArray[16] = loadImage("Blues/BlueGreen.png");
  WFArray[17] = loadImage("Blues/BlueBlack.png");
  WFArray[18] = loadImage("Blues/BlueCharcoal.png");
  WFArray[19] = loadImage("Greens/GreenPink.png");
  WFArray[20] = loadImage("Greens/GreenBlue.png");
  WFArray[21] = loadImage("Greens/GreenBlack.png");
  WFArray[22] = loadImage("Greens/GreenCharcoal.png");
  WFArray[23] = loadImage("Greens/GreenCreme.png");
  WFArray[24] = loadImage("Blacks/BlackPink.png");
  WFArray[25] = loadImage("Blacks/BlackBlue.png");
  WFArray[26] = loadImage("Blacks/BlackCharcoal.png");
  WFArray[27] = loadImage("Blacks/BlackCreme.png");
  WFArray[28] = loadImage("Blacks/BlackGreen.png");
  WFArray[29] = loadImage("Charcoal/CharcoalPink.png");
  WFArray[30] = loadImage("Charcoal/CharcoalBlue.png");
  WFArray[31] = loadImage("Charcoal/CharcoalGreen.png");
  WFArray[32] = loadImage("Charcoal/CharcoalBlack.png");
  WFArray[33] = loadImage("Cremes/CremeGreen.png");
  WFArray[34] = loadImage("Cremes/CremeBlack.png");
  WFArray[35] = loadImage("Cremes/CremeCharcoal.png");
  WFArray[36] = loadImage("Charcoal/CharcoalCreme.png");
}

function setup() {
  let canvas = createCanvas(700, 400);
  canvas.parent("sketch-holder");
  randomColor = int(random(theColors.length));
  imageMode(CENTER);

  // Resize the clothes images
  for (let i = 0; i < midArray.length; i++) {
    midArray[i].resize(200, 300);
  }
  for (let i = 0; i < bottomArray.length; i++) {
    bottomArray[i].resize(200, 300);
  }

  for (let i = 0; i < WFArray.length; i++) {
    WFArray[i].resize(200, 300);
  }

  let button = createButton("Create Outfit");
  button.parent("button-holder");
  button.mousePressed(solidify);

  let button4 = createButton("Change Color");
  button4.parent("button-holder");
  button4.mousePressed(changeColor);

  let button3 = createButton("Save Outfit");
  button3.parent("button-holder");
  button3.mousePressed(createFinalOutfit);

  let button2 = createButton("Try Again");
  button2.parent("button-holder");
  button2.mousePressed(Clear);

  midIndex = int(random(midArray.length - 1));
  bottomIndex = int(random(bottomArray.length - 1));
}

function draw() {
  drawCatwalkRunway();
  image(WFArray[WFIndex], 350, 200);
  image(midArray[midIndex], 350, 200);
  image(bottomArray[bottomIndex], 350, 190);
  changeMid();
  changeBottom();
}

function drawCatwalkRunway() {
  // Background color: dark grey for the stage
  background(40, 40, 40);
  stroke(255);

  beginShape();
  vertex(100, 250);
  vertex(600, 250);
  vertex(600, 350);
  vertex(100, 350);
  endShape();

  rect(150, 50, 400, 300); // Runway
  fill(166, 3, 22); // curtains
  rect(50, 50, 100, 300); // Left
  rect(550, 50, 100, 300); //right
  noStroke();
  drawSpotlights();
}

function drawSpotlights() {
  fill(255, 255, 255, 150); // White light
  ellipse(175, 120, 80, 80); // Left spotlight
  ellipse(525, 120, 80, 80); // Right spotlight
  ellipse(175, 250, 80, 80); // Left spotlight 2
  ellipse(525, 250, 80, 80); // Right spotlight 2
}

function changeMid() {
  if (keyIsPressed == true && keyCode == RIGHT_ARROW)
    midIndex = int(random(midArray.length - 1));
}

function changeBottom() {
  if (keyIsPressed == true && keyCode == LEFT_ARROW)
    bottomIndex = int(random(bottomArray.length - 1));
}

function solidify() {
  // Matching outfits
  if (midIndex === 4 && bottomIndex === 4) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 1; // Full Pink Outfit
  }
  if (midIndex === 5 && bottomIndex === 5) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 9; // Full Blue Outfit
  }
  if (midIndex === 2 && bottomIndex === 2) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 7; // Full Creme Outfit
  }
  if (midIndex === 3 && bottomIndex === 3) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 10; // Full Green Outfit
  }
  if (midIndex === 0 && bottomIndex === 0) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 12; // Full Black Outfit
  }
  if (midIndex === 1 && bottomIndex === 1) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 11; // Full Charcoal Outfit
  }

  // Pink top combinations
  if (midIndex === 4 && bottomIndex === 5) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 2; // Pink Top + Blue Bottom
  }
  if (midIndex === 4 && bottomIndex === 2) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 3; // Pink Top + Creme Bottom
  }
  if (midIndex === 4 && bottomIndex === 3) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 13; // Pink Top + Green Bottom
  }
  if (midIndex === 4 && bottomIndex === 0) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 14; // Pink Top + Black Bottom
  }
  if (midIndex === 4 && bottomIndex === 1) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 15; // Pink Top + Charcoal Bottom
  }

  // Blue top combinations
  if (midIndex === 5 && bottomIndex === 4) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 5; // Blue Top + Pink Bottom
  }
  if (midIndex === 5 && bottomIndex === 2) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 8; // Blue Top + Creme Bottom
  }
  if (midIndex === 5 && bottomIndex === 3) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 16; // Blue Top + Green Bottom
  }
  if (midIndex === 5 && bottomIndex === 0) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 17; // Blue Top + Black Bottom
  }
  if (midIndex === 5 && bottomIndex === 1) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 18; // Blue Top + Charcoal Bottom
  }

  // Creme top combinations
  if (midIndex === 2 && bottomIndex === 4) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 4; // Creme Top + Pink Bottom
  }
  if (midIndex === 2 && bottomIndex === 5) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 6; // Creme Top + Blue Bottom
  }
  if (midIndex === 2 && bottomIndex === 3) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 19; // Creme Top + Green Bottom
  }
  if (midIndex === 2 && bottomIndex === 0) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 20; // Creme Top + Black Bottom
  }
  if (midIndex === 2 && bottomIndex === 1) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 35; // Creme Top + Charcoal Bottom
  }

  // Green top combinations
  if (midIndex === 3 && bottomIndex === 4) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 22; // Green Top + Pink Bottom
  }
  if (midIndex === 3 && bottomIndex === 5) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 23; // Green Top + Blue Bottom
  }
  if (midIndex === 3 && bottomIndex === 2) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 24; // Green Top + Creme Bottom
  }
  if (midIndex === 3 && bottomIndex === 0) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 25; // Green Top + Black Bottom
  }
  if (midIndex === 3 && bottomIndex === 1) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 26; // Green Top + Charcoal Bottom
  }

  // Black top combinations
  if (midIndex === 0 && bottomIndex === 4) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 27; // Black Top + Pink Bottom
  }
  if (midIndex === 0 && bottomIndex === 5) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 28; // Black Top + Blue Bottom
  }
  if (midIndex == 0 && bottomIndex == 2) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 29; // Black Top + Creme Bottom
  }
  if (midIndex == 0 && bottomIndex == 3) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 30; // Black Top + Green Bottom
  }
  if (midIndex == 0 && bottomIndex == 1) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 31; // Black Top + Charcoal Bottom
  }

  // Charcoal top combinations
  if (midIndex == 1 && bottomIndex == 4) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 32; // Charcoal Top + Pink Bottom
  }
  if (midIndex == 1 && bottomIndex == 5) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 33; // Charcoal Top + Blue Bottom
  }
  if (midIndex == 1 && bottomIndex == 2) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 34; // Charcoal Top + Creme Bottom
  }
  if (midIndex == 1 && bottomIndex == 3) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 35; // Charcoal Top + Green Bottom
  }
  if (midIndex == 1 && bottomIndex == 0) {
    bottomIndex = 6;
    midIndex = 6;
    WFIndex = 36; // Charcoal Top + Black Bottom
  }
}

function Clear() {
  if (WFIndex > 0) {
    WFIndex = 0;
  }
}
function changeColor() {
  randomColor = int(random(theColors.length));
  tint(theColors[randomColor]);
  image(WFArray[WFIndex], 350, 200);
}

function createFinalOutfit() {
  saveCanvas("My Outfit", "png");
}
