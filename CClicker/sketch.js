let lastSecond = 0;
let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let bgImg;
let stImg;
let munchSound;
let tileOffset = 64;
let upgradeCostMultiplier = 1.15;

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

let CursorUpgradeAmount = 0.1;
let GrandmaUpgradeAmount = 1;
let FarmUpgradeAmount = 8;
let MineUpgradeAmount = 47;
let FactoryUpgradeAmount = 260;
let BankUpgradeAmount = 1400;
let TempleUpgradeAmount = 7800;
let WizardTowerUpgradeAmount = 44000;
let ShipmentUpgradeAmount = 260000;
let AlchemyLabUpgradeAmount = 1600000;

let CursorBought = 0;
let GrandmaBought = 0;
let FarmBought = 0;
let MineBought = 0;
let FactoryBought = 0;
let BankBought = 0;
let TempleBought = 0;
let WizardBought = 0;
let ShipmentBought = 0;
let AlchemyLabBought = 0;



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

// making it so you can hover over items to see what they do

textAlign(RIGHT, CENTER);

  // Original code
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 && mouseY <= stImg.height) {
    text('Adds: ' + CursorUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32);
  }

  // Variation 1
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 1 && mouseY <= stImg.height + tileOffset * 1) {
    text('Adds: ' + GrandmaUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 1);
  }

  // Variation 2
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 2 && mouseY <= stImg.height + tileOffset * 2) {
    text('Adds: ' + FarmUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 2);
  }

  // Variation 3
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 3 && mouseY <= stImg.height + tileOffset * 3) {
    text('Adds: ' + MineUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 3);
  }

  // Variation 4
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 4 && mouseY <= stImg.height + tileOffset * 4) {
    text('Adds: ' + FactoryUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 4);
  }

  // Variation 5
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 5 && mouseY <= stImg.height + tileOffset * 5) {
    text('Adds: ' + BankUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 5);
  }

  // Variation 6
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 6 && mouseY <= stImg.height + tileOffset * 6) {
    text('Adds: ' + TempleUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 6);
  }

  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 7 && mouseY <= stImg.height + tileOffset * 7) {
    text('Adds: ' + WizardTowerUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 7);
  }

  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 8 && mouseY <= stImg.height + tileOffset * 8) {
    text('Adds: ' + ShipmentUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 8);
  }

  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 9 && mouseY <= stImg.height + tileOffset * 9) {
    text('Adds: ' + AlchemyLabUpgradeAmount + ' cookies per second', (width - 310), (height - height) + 32 + tileOffset * 9);
  }

}



function displayStats() {
  textSize(60);
  textAlign(LEFT, CENTER);

  text('Cookies: 🍪 ' + round(cookies, 1), 5, 30);

  textSize(20);
  textAlign(LEFT, TOP);
  text("Cookies Per Second: " + round(cookiesPerSecond, 1), 5, 60);
  text("Cookies Per Click: " + round(cookiesPerClick, 1), 5, 80);
}

function displayUpgrades() {
  // Display Grandma upgrade image
  // Original code
  let drawImage = image(stImg, (width - 300), (height - height), stImg.width, stImg.height);

  // Variation 1
  let drawImage1 = image(stImg, (width - 300), (height - height) + tileOffset * 1, stImg.width, stImg.height);

  // Variation 2
  let drawImage2 = image(stImg, (width - 300), (height - height) + tileOffset * 2, stImg.width, stImg.height);

  // Variation 3
  let drawImage3 = image(stImg, (width - 300), (height - height) + tileOffset * 3, stImg.width, stImg.height);

  // Variation 4
  let drawImage4 = image(stImg, (width - 300), (height - height) + tileOffset * 4, stImg.width, stImg.height);

  // Variation 5
  let drawImage5 = image(stImg, (width - 300), (height - height) + tileOffset * 5, stImg.width, stImg.height);

  // Variation 6
  let drawImage6 = image(stImg, (width - 300), (height - height) + tileOffset * 6, stImg.width, stImg.height);

  // Variation 7
  let drawImage7 = image(stImg, (width - 300), (height - height) + tileOffset * 7, stImg.width, stImg.height);

  // Variation 8
  let drawImage8 = image(stImg, (width - 300), (height - height) + tileOffset * 8, stImg.width, stImg.height);

  // Variation 9
  let drawImage9 = image(stImg, (width - 300), (height - height) + tileOffset * 9, stImg.width, stImg.height);


  textSize(26);
  textAlign(LEFT, BOTTOM);
  textFont("Comic Sans MS");
  // Original code
  text('Cursor Upgrade', (width - 290), (height - height) + 40);

  // Variation 1
  text('Grandma Upgrade', (width - 290), (height - height) + 40 + tileOffset * 1);

  // Variation 2
  text('Farm Upgrade', (width - 290), (height - height) + 40 + tileOffset * 2);

  // Variation 3
  text('Mine Upgrade', (width - 290), (height - height) + 40 + tileOffset * 3);

  // Variation 4
  text('Factory Upgrade', (width - 290), (height - height) + 40 + tileOffset * 4);

  // Variation 5
  text('Bank Upgrade', (width - 290), (height - height) + 40 + tileOffset * 5);

  // Variation 6
  text('Temple Upgrade', (width - 290), (height - height) + 40 + tileOffset * 6);

  // Variation 7
  text('Wizard Tower Upgrade', (width - 290), (height - height) + 40 + tileOffset * 7);

  // Variation 8
  text('Shipment Upgrade', (width - 290), (height - height) + 40 + tileOffset * 8);

  // Variation 9
  text('Alchemy Lab Upgrade', (width - 290), (height - height) + 40 + tileOffset * 9);




  textSize(15);

  text('Upgrade Cost: ' + round(CursorUpgradeCost), (width - 290), (height - height) + 55);

  // Variation 1
  text('Upgrade Cost: ' + round(GrandmaUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 1);

  // Variation 2
  text('Upgrade Cost: ' + round(FarmUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 2);

  // Variation 3
  text('Upgrade Cost: ' + round(MineUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 3);

  // Variation 4
  text('Upgrade Cost: ' + round(FactoryUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 4);

  // Variation 5
  text('Upgrade Cost: ' + round(BankUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 5);

  // Variation 6
  text('Upgrade Cost: ' + round(TempleUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 6);

  // Variation 7
  text('Upgrade Cost: ' + round(WizardTowerUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 7);

  // Variation 8
  text('Upgrade Cost: ' + round(ShipmentUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 8);

  // Variation 9
  text('Upgrade Cost: ' + round(AlchemyLabUpgradeCost), (width - 290), (height - height) + 55 + tileOffset * 9);

  textAlign(RIGHT, BOTTOM);
  textSize(10);

  text('Bought: ' + round(CursorBought), (width - 5), (height - height) + 55);

  // Variation 1
  text('Bought: ' + round(GrandmaBought), (width - 5), (height - height) + 55 + tileOffset * 1);

  // Variation 2
  text('Bought: ' + round(FarmBought), (width - 5), (height - height) + 55 + tileOffset * 2);

  // Variation 3
  text('Bought: ' + round(MineBought), (width - 5), (height - height) + 55 + tileOffset * 3);

  // Variation 4
  text('Bought: ' + round(FactoryBought), (width - 5), (height - height) + 55 + tileOffset * 4);

  // Variation 5
  text('Bought: ' + round(BankBought), (width - 5), (height - height) + 55 + tileOffset * 5);

  // Variation 6
  text('Bought: ' + round(TempleBought), (width - 5), (height - height) + 55 + tileOffset * 6);

  // Variation 7
  text('Bought: ' + round(WizardBought), (width - 5), (height - height) + 55 + tileOffset * 7);

  // Variation 8
  text('Bought: ' + round(ShipmentBought), (width - 5), (height - height) + 55 + tileOffset * 8);

  // Variation 9
  text('Bought: ' + round(AlchemyLabBought), (width - 5), (height - height) + 55 + tileOffset * 9);

}

function mouseClicked() {

  // Original code
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 && mouseY <= stImg.height) {
    cursorClicked()
  }

  // Variation 1
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 1 && mouseY <= stImg.height + tileOffset * 1) {
    grandmaClicked()
  }

  // Variation 2
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 2 && mouseY <= stImg.height + tileOffset * 2) {
    farmClicked()
  }

  // Variation 3
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 3 && mouseY <= stImg.height + tileOffset * 3) {
    mineClicked()
  }

  // Variation 4
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 4 && mouseY <= stImg.height + tileOffset * 4) {
    factoryClicked()
  }

  // Variation 5
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 5 && mouseY <= stImg.height + tileOffset * 5) {
    bankClicked()
  }

  // Variation 6
  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 6 && mouseY <= stImg.height + tileOffset * 6) {
    templeClicked()
  }

  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 7 && mouseY <= stImg.height + tileOffset * 7) {
    wizardTowerClicked()
  }

  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 8 && mouseY <= stImg.height + tileOffset * 8) {
    shipmentClicked()
  }

  if (mouseX >= (width - 300) && mouseX <= (width - 300 + stImg.width) && mouseY >= 0 + tileOffset * 9 && mouseY <= stImg.height + tileOffset * 9) {
    alchemyLabClicked()
  }
}

function cursorClicked() {
  if (cookies >= CursorUpgradeCost) {
    cookies -= CursorUpgradeCost;
    cookiesPerSecond += CursorUpgradeAmount;
    CursorUpgradeCost *= upgradeCostMultiplier;
    CursorBought += 1;
  }
}

function grandmaClicked() {
  if (cookies >= GrandmaUpgradeCost) {
    cookies -= GrandmaUpgradeCost;
    cookiesPerSecond += GrandmaUpgradeAmount;
    GrandmaUpgradeCost *= upgradeCostMultiplier;
    GrandmaBought += 1;
  }
}

function farmClicked() {
  if (cookies >= FarmUpgradeCost) {
    cookies -= FarmUpgradeCost;
    cookiesPerSecond += FarmUpgradeAmount;
    FarmUpgradeCost *= upgradeCostMultiplier;
    FarmBought += 1;
  }
}

function mineClicked() {
  if (cookies >= MineUpgradeCost) {
    cookies -= MineUpgradeCost;
    cookiesPerSecond += MineUpgradeAmount;
    MineUpgradeCost *= upgradeCostMultiplier;
    MineBought += 1;
  }
}

function factoryClicked() {
  if (cookies >= FactoryUpgradeCost) {
    cookies -= FactoryUpgradeCost;
    cookiesPerSecond += FactoryUpgradeAmount;
    FactoryUpgradeCost *= upgradeCostMultiplier;
    FactoryBought += 1;
  }
}

function bankClicked() {
  if (cookies >= BankUpgradeCost) {
    cookies -= BankUpgradeCost;
    cookiesPerSecond += BankUpgradeAmount;
    BankUpgradeCost *= upgradeCostMultiplier;
    BankBought += 1
  }
}

function templeClicked() {
  if (cookies >= TempleUpgradeCost) {
    cookies -= TempleUpgradeCost;
    cookiesPerSecond += TempleUpgradeAmount;
    TempleUpgradeCost *= upgradeCostMultiplier;
    TempleBought += 1;
  }
}

function wizardTowerClicked() {
  if (cookies >= WizardTowerUpgradeCost) {
    cookies -= WizardTowerUpgradeCost;
    cookiesPerSecond += WizardTowerUpgradeAmount;
    WizardTowerUpgradeCost *= upgradeCostMultiplier;
    WizardBought += 1;
  }
}

function shipmentClicked() {
  if (cookies >= ShipmentUpgradeCost) {
    cookies -= ShipmentUpgradeCost;
    cookiesPerSecond += ShipmentUpgradeAmount;
    ShipmentUpgradeCost *= upgradeCostMultiplier;
    ShipmentBought += 1;
  }
}

function alchemyLabClicked() {
  if (cookies >= AlchemyLabUpgradeCost) {
    cookies -= AlchemyLabUpgradeCost;
    cookiesPerSecond += AlchemyLabUpgradeAmount;
    AlchemyLabUpgradeCost *= upgradeCostMultiplier;
    AlchemyLabBought += 1;
  }
}



function autoCookies() {
  cookies += cookiesPerSecond / 60;
}

function cookieClicked() {
  cookies += cookiesPerClick;
  munchSound.play()
}