let sceneNo = 0
var object1;
let scene1Score = 0
let scene2Score = 0
let scene3Score = 0


let sinkCoverClicked = false
let showerClicked = false
let sinkClicked = false
let lightClicked = false
let exhaustClicked = false
let binClicked = false
let lampClicked = false
let toasterClicked = false
let ovenClicked = false
let blenderClicked = false
let microwaveClicked = false


function preload() {

  earthImg = loadImage('earth.png')
  scOne = loadImage('scene_one.jpg')
  scTwo = loadImage('scene_two.png')
  scThree = loadImage('scene_three.jpg')
}

function setup() {
  createCanvas(600, 400);
}

function draw() {



  imageMode(CENTER)


  background(255, 192, 203);
  Logo()

  if (sceneNo === 0) {

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(48);
    text('Climate Inspector', width / 2, height / 3);

    fill(100);
    textAlign(CENTER, CENTER);
    textSize(24);

    text('Your goal is to find and click the objects you can \n see that might effect the climate or enviroment. \n For example, Lights being left on or water left running.', width / 2, height / 1.8);

    fill(255)
    rect(width / 2 - (100 / 2), (height / 2) + 100, 100, 50)

    fill(0)
    textSize(35)
    text('Start', width / 2, (height / 2) + 125)

  } else if (sceneNo >= 1 && sceneNo <= 4) {

    background(255, 192, 203)
    Logo()

    image(scOne, width / 2 + 35, (height / 2), scOne.width / 2.25, scOne.height / 2.25)

    textSize(45)
    text(scene1Score + '/4', 50, 125)

    textSize(20)
    text('Problems \n Found', 50, 180)

  } else if (sceneNo >= 5 && sceneNo <= 7) {

    background(255, 192, 203)
    Logo()

    image(scTwo, width / 2 + 35, (height / 2), scOne.width / 2.25, scOne.height / 2.25)

    textSize(45)
    text(scene2Score + '/3', 50, 125)

    textSize(20)
    text('Problems \n Found', 50, 180)

  } else if (sceneNo >= 8 && sceneNo <= 11) {

    background(255, 192, 203)
    Logo()

    image(scThree, width / 2 + 35, (height / 2), scOne.width / 2.25, scOne.height / 2.25)

    textSize(45)
    text(scene3Score + '/4', 50, 125)

    textSize(20)
    text('Problems \n Found', 50, 180)
    

  } else if (sceneNo >=12 && sceneNo <= 12) {
    
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(48);
    text('Thanks For Playing!!', width / 2, height / 3);

    fill(100);
    textAlign(CENTER, CENTER);
    textSize(24);

    text('We hope you enjoyed our game. \n If you would like to know more about how you can \n help reduce your impact on the enviroment, \n you can click the button below', width / 2, height / 1.8);
    
    fill(0)
    textAlign(LEFT, CENTER);
    textSize(15);
    text('Credits: Lyla (Coder), Joe (Co-Coder), Wilf (Artist), Rv (Artist), Lennox (Researcher)', 3, 387)
    
    textAlign(CENTER, CENTER);
    fill(255)
    rect((width / 2 - (100 / 2)) - 100, (height / 2) + 100, 100, 50)
    rect((width / 2 - (100 / 2)) + 100, (height / 2) + 100, 100, 50)
    
    fill(0)
    textSize(18)
    text('Learn More', width / 2 - 100, (height / 2) + 125)
    
    textSize(19)
    text('Play Again', width / 2 + 100, (height / 2) + 125)
    
  } else if (sceneNo === 13) {
    
    fill(255)
    rect(width / 2 - (100 / 2), (height / 2) + 125, 100, 50)

    fill(0)
    textSize(25)
    text('Go Back', width / 2, (height / 2) + 150)
    
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(48);
    text('Climate Information', width / 2, 60);

    fill(100);
    textAlign(CENTER, CENTER);
    textSize(18);
    textWrap(WORD)
    text('Electricity and Heat Production create around 25% of global carbon emissions, ways to reduce your impact on this include turning off lights when not in the room and taking shorter showers or baths to reduce water consumption. The Agriculture, Forestry, etc. industries produce around 25% of global carbon emissions, this includes, deforestation, agriculture, livestock, and farming. The transportation industry creates around 14% of global emissions, ways you can mitigate this is using public transport like buses and trains, or use alternate methods to get to your destination like walking or using a bike.', 12.75, 215, 575);
    
    
    
  }

}

function Logo() {

  image(earthImg, 45, 45, earthImg.width / 25, earthImg.height / 25)
}

function mouseClicked() {
  if (sceneNo === 0) {

    sceneZeroClicked()

  } else if (sceneNo >= 1 && sceneNo <= 4) {

    sceneOneClicked()

  } else if (sceneNo >= 5 && sceneNo <= 7) {

    sceneTwoClicked()

  } else if (sceneNo >= 8 && sceneNo <= 11) {

    sceneThreeClicked()

  } else if (sceneNo >=12 && sceneNo <= 12){
    
    endScreenClicked()
    
  } else if (sceneNo >=13) {
    
    infoScreenClicked()
    
  }

}

function levelUp() {
  sceneNo += 1
}

function sceneZeroClicked() {

  if (mouseX > (width / 2 - (100 / 2)) &&
    mouseX < (width / 2 - (100 / 2)) + 100 &&
    mouseY > ((height / 2) + 100) &&
    mouseY < ((height / 2) + 100) + 50) {
    levelUp()
  }

}

function sceneOneClicked() {

  if (sinkCoverClicked === false && mouseX > 180 && mouseX < 180 + 85 && mouseY > 115 && mouseY < 115 + 40) {
    console.log("sink-cover")
    levelUp()
    scene1Score += 1
    sinkCoverClicked = true
  }

  // Rectangle 2
  if (showerClicked === false && mouseX > 470 && mouseX < 470 + 60 && mouseY > 85 && mouseY < 85 + 50) {
    console.log("shower")
    levelUp()
    scene1Score += 1
    showerClicked = true
  }

  // Rectangle 3
  if (sinkClicked === false && mouseX > 135 && mouseX < 135 + 85 && mouseY > 185 && mouseY < 185 + 50) {
    console.log("sink")
    levelUp()
    scene1Score += 1
    sinkClicked = true
  }

  // Rectangle 4
  if (lightClicked === false && mouseX > 260 && mouseX < 260 + 85 && mouseY > 65 && mouseY < 65 + 40) {
    console.log("light")
    levelUp()
    scene1Score += 1
    lightClicked = true
  }

}

function sceneTwoClicked() {


  if (exhaustClicked === false && mouseX > 227 && mouseX < 227 + 110 && mouseY > 280 && mouseY < 280 + 70) {
    console.log("exhaust")
    levelUp()
    scene2Score += 1
    exhaustClicked = true
  }

  if (binClicked === false && mouseX > 195 && mouseX < 195 + 115 && mouseY > 210 && mouseY < 210 + 70) {
    console.log("bin")
    levelUp()
    scene2Score += 1
    binClicked = true
  }

  if (lampClicked === false && mouseX > 420 && mouseX < 420 + 120 && mouseY > 57 && mouseY < 57 + 40) {
    console.log("lamp")
    levelUp()
    scene2Score += 1
    lampClicked = true
  }

}

function sceneThreeClicked() {


if (toasterClicked === false && mouseX > 113 && mouseX < 113 + 32 && mouseY > 153 && mouseY < 153 + 50) {
  console.log('toaster')
  levelUp()
  scene3Score += 1
  toasterClicked = true
}


if (ovenClicked === false && mouseX > 183 && mouseX < 183 + 122 && mouseY > 156 && mouseY < 156 + 85) {
  console.log('oven')
  levelUp()
  scene3Score += 1
  ovenClicked = true
}


if (blenderClicked === false && mouseX > 339 && mouseX < 339 + 75 && mouseY > 219 && mouseY < 219 + 95) {
  console.log('blender')
  levelUp()
  scene3Score += 1
  blenderClicked = true
}


if (microwaveClicked === false && mouseX > 338 && mouseX < 338 + 75 && mouseY > 87 && mouseY < 87 + 50) {
  console.log('microwave')
  levelUp()
  scene3Score += 1
  microwaveClicked = true
}

}

function endScreenClicked() {
  

if (mouseX > (width / 2 - (100 / 2)) - 100 && mouseX < ((width / 2 - (100 / 2)) - 100) + 100 &&
    mouseY > (height / 2) + 100 && mouseY < ((height / 2) + 100) + 50) {
    sceneNo += 1
}

if (mouseX > (width / 2 - (100 / 2)) + 100 && mouseX < ((width / 2 - (100 / 2)) + 100) + 100 &&
    mouseY > (height / 2) + 100 && mouseY < ((height / 2) + 100) + 50) {

scene1Score = 0
scene2Score = 0
scene3Score = 0
sinkCoverClicked = false
showerClicked = false
sinkClicked = false
lightClicked = false
exhaustClicked = false
binClicked = false
lampClicked = false
toasterClicked = false
ovenClicked = false
blenderClicked = false
microwaveClicked = false
  
    sceneNo = 0
}

  
}

function infoScreenClicked() {
  
if (mouseX > (width / 2 - (100 / 2)) && mouseX < (width / 2 - (100 / 2)) + 100 &&
    mouseY > (height / 2) + 125 && mouseY < (height / 2) + 125 + 50) {
  
  sceneNo -= 1
  
}

}