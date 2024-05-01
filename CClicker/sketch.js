let lastSecond = 0;
let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let bgImg;
let stImg;
let munchSound;
let tileOffset = 64;


let isCursorUpgradeDisplayed = false;
let isGrandmaUpgradeDisplayed = false;
let isFarmUpgradeDisplayed = false;
let isMineUpgradeDisplayed = false;
let isFactoryUpgradeDisplayed = false;
let isBankUpgradeDisplayed = false;
let isTempleUpgradeDisplayed = false;
let isWizardTowerUpgradeDisplayed = false;
let isShipmentUpgradeDisplayed = false;
let isAlchemyLabUpgradeDisplayed = false;

let CursorUpgradeCost = 15;
let GrandmaUpgradeCost = 100;
let FarmUpgradeCost = 1100;
let MineUpgradeCost = 12000;
let FactoryUpgradeCost = 130000;
let BankUpgradeCost = 1400000;
let TempleUpgradeCost = 20000000;
let WizardTowerUpgradeCost = 330000000;
let ShipmentUpgradeCost = 5100000000;
let AlchemyLabUpgradeCost = 75000000000;


function preload() {
  soundFormats('mp3');
  munchSound = loadSound('clickSound.mp3');
  
  stImg = loadImage('storeTile.png');
  bgImg = loadImage('bgBlue.png');
}

function draw() {
  background(bgImg);
  displayStats();
  autoCookies();

  displayUpgrades();

}



function displayStats() {
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Cookies: ' + round(cookies, 1) + " 🍪", (width - 300) / 2 , height / 2 - 150);

  textSize(15);
  textAlign(LEFT, TOP);
  text("Cookies Per Click: " + round(cookiesPerClick, 1), 5, 5);

  textSize(15);
  textAlign(LEFT, TOP);
  text("Cookies Per Second: " + round(cookiesPerSecond, 1), 5, 20);
}

function displayUpgrades() {
  // Display Grandma upgrade image
// Original code
let drawImage = image(stImg, (width-300), (height-height), stImg.width, stImg.height);

// Variation 1
let drawImage1 = image(stImg, (width-300), (height-height) + tileOffset * 1, stImg.width, stImg.height);

// Variation 2
let drawImage2 = image(stImg, (width-300), (height-height) + tileOffset * 2, stImg.width, stImg.height);

// Variation 3
let drawImage3 = image(stImg, (width-300), (height-height) + tileOffset * 3, stImg.width, stImg.height);

// Variation 4
let drawImage4 = image(stImg, (width-300), (height-height) + tileOffset * 4, stImg.width, stImg.height);

// Variation 5
let drawImage5 = image(stImg, (width-300), (height-height) + tileOffset * 5, stImg.width, stImg.height);

// Variation 6
let drawImage6 = image(stImg, (width-300), (height-height) + tileOffset * 6, stImg.width, stImg.height);

// Variation 7
let drawImage7 = image(stImg, (width-300), (height-height) + tileOffset * 7, stImg.width, stImg.height);

// Variation 8
let drawImage8 = image(stImg, (width-300), (height-height) + tileOffset * 8, stImg.width, stImg.height);

// Variation 9
let drawImage9 = image(stImg, (width-300), (height-height) + tileOffset * 9, stImg.width, stImg.height);


  textSize(26);
  textAlign(LEFT, BOTTOM);
  textFont("Comic Sans MS");
  // Original code
text('Cursor Upgrade', (width-290), (height-height)+40);

// Variation 1
text('Grandma Upgrade', (width-290), (height-height)+40 + tileOffset * 1);

// Variation 2
text('Farm Upgrade', (width-290), (height-height)+40 + tileOffset * 2);

// Variation 3
text('Mine Upgrade', (width-290), (height-height)+40 + tileOffset * 3);

// Variation 4
text('Factory Upgrade', (width-290), (height-height)+40 + tileOffset * 4);

// Variation 5
text('Bank Upgrade', (width-290), (height-height)+40 + tileOffset * 5);

// Variation 6
text('Temple Upgrade', (width-290), (height-height)+40 + tileOffset * 6);

// Variation 7
text('Wizard Tower Upgrade', (width-290), (height-height)+40 + tileOffset * 7);

// Variation 8
text('Shipment Upgrade', (width-290), (height-height)+40 + tileOffset * 8);

// Variation 9
text('Alchemy Lab Upgrade', (width-290), (height-height)+40 + tileOffset * 9);


textSize(15);

text('Upgrade Cost: ', (width-290), (height-height)+55);

// Variation 1
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 1);

// Variation 2
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 2);

// Variation 3
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 3);

// Variation 4
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 4);

// Variation 5
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 5);

// Variation 6
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 6);

// Variation 7
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 7);

// Variation 8
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 8);

// Variation 9
text('Upgrade Cost: ', (width-290), (height-height)+55 + tileOffset * 9);
  
}

function mouseClicked() {

// Original code
if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 && mouseY <= stImg.height) {
  console.log('Cursor ');
}

// Variation 1
if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 1 && mouseY <= stImg.height + tileOffset * 1) {
  console.log('Granma');
}

// Variation 2
if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 2 && mouseY <= stImg.height + tileOffset * 2) {
  console.log('Farm');
}

// Variation 3
if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 3 && mouseY <= stImg.height + tileOffset * 3) {
  console.log('Mine');
}

// Variation 4
if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 4 && mouseY <= stImg.height + tileOffset * 4) {
  console.log('Factory');
}

// Variation 5
if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 5 && mouseY <= stImg.height + tileOffset * 5) {
  console.log('Bank');
}

// Variation 6
if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 6 && mouseY <= stImg.height + tileOffset * 6) {
  console.log('Temple');
}

if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 7 && mouseY <= stImg.height + tileOffset * 7) {
  console.log('Wizard');
}

if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 8 && mouseY <= stImg.height + tileOffset * 8) {
  console.log('Shipment');
}

if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 9 && mouseY <= stImg.height + tileOffset * 9) {
  console.log('Alchemy');
}

  


}

function cursorUpgrade() {
  cursorButton = createImg('storeTile.png', '');
  cursorButton.position((width-300), (height-height));
  cursorButton.mousePressed(cursorClicked);  
}




function cursorClicked() {
  cookiesPerSecond += 0.1;
  cookies
}

function grandmaClicked() {

}

function farmClicked() {
  // Code for farm upgrade clicked
}

function mineClicked() {
  // Code for mine upgrade clicked
}

function factoryClicked() {
  // Code for factory upgrade clicked
}

function bankClicked() {
  // Code for bank upgrade clicked
}

function templeClicked() {
  // Code for temple upgrade clicked
}

function wizardTowerClicked() {
  // Code for wizard tower upgrade clicked
}

function shipmentClicked() {
  // Code for shipment upgrade clicked
}

function alchemyLabClicked() {
  // Code for alchemy lab upgrade clicked
}

function autoCookies() {
  if (frameCount % 60 === 0 && frameCount !== lastSecond) {
    cookies += cookiesPerSecond;
    lastSecond = frameCount;
  }
}

function cookieClicked() {
  cookies += cookiesPerClick;
  munchSound.play()
}


