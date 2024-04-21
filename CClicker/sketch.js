let lastSecond = 0;
let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;

let upgrades = [
  { "name": "Click Upgrade 1", "type": "click", "increase": 1, "cost": 100 },
  { "name": "Auto Upgrade 1", "type": "auto", "increase": 0.1, "cost": 50 },
  { "name": "Auto Upgrade 2", "type": "auto", "increase": 0.2, "cost": 200 },
  { "name": "Auto Upgrade 3", "type": "auto", "increase": 0.5, "cost": 1000 },
  { "name": "Click Upgrade 2", "type": "click", "increase": 2, "cost": 500 },
  { "name": "Auto Upgrade 4", "type": "auto", "increase": 1, "cost": 5000 },
  { "name": "Auto Upgrade 5", "type": "auto", "increase": 2, "cost": 10000 },
  { "name": "Auto Upgrade 6", "type": "auto", "increase": 5, "cost": 20000 },
  { "name": "Click Upgrade 3", "type": "click", "increase": 5, "cost": 2000 },
  { "name": "Auto Upgrade 7", "type": "auto", "increase": 10, "cost": 50000 },
  { "name": "Click Upgrade 4", "type": "click", "increase": 10, "cost": 5000 },
  { "name": "Auto Upgrade 8", "type": "auto", "increase": 20, "cost": 100000 },
  { "name": "Auto Upgrade 9", "type": "auto", "increase": 50, "cost": 200000 },
  { "name": "Click Upgrade 5", "type": "click", "increase": 20, "cost": 20000 },
  { "name": "Auto Upgrade 10", "type": "auto", "increase": 100, "cost": 500000 },
  { "name": "Auto Upgrade 11", "type": "auto", "increase": 200, "cost": 1000000 },
];

let clickUpgradeButtons = [];
let autoUpgradeButtons = [];

function setup() {
  createCanvas(600, 400);

  cookieButton = createImg('cookie.png', 'cookie');
  cookieButton.position(width / 2 - cookieButton.width / 2, height / 2 - cookieButton.height / 2);
  cookieButton.mousePressed(cookieClicked);

  let xOffset = 10;
  let yOffset = height + 20;
  let buttonsInRow = 0;

  for (let i = 0; i < upgrades.length; i++) {
    let buttonText;
    if (upgrades[i].type === 'click') {
      buttonText = upgrades[i].name + '<br> (+ ' + upgrades[i].increase + ' Per Click) <br> Cost: ' + upgrades[i].cost;
    } else {
      buttonText = upgrades[i].name + '<br> (+ ' + upgrades[i].increase + ' Per Second) <br> Cost: ' + upgrades[i].cost;
    }
    let button = createButton(buttonText);
    button.mousePressed(createUpgradeButtonHandler(upgrades[i], button));
    button.position(xOffset, yOffset);
    button.size(140, 40);
    xOffset += 150;
    buttonsInRow++;

    if (buttonsInRow >= 4) {
      yOffset += 60;
      xOffset = 10;
      buttonsInRow = 0;
    }

    if (upgrades[i].type === 'click') {
      clickUpgradeButtons.push(button);
    } else {
      autoUpgradeButtons.push(button);
    }
  }
}

function draw() {
  background(220);
  displayStats();
  autoCookies();
}

function displayStats() {
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Cookies: ' + round(cookies, 1) + " 🍪", width / 2, height / 2 - 150);

  textSize(15);
  textAlign(LEFT, TOP);
  text("Cookies Per Click: " + round(cookiesPerClick, 1), 5, 5);

  textSize(15);
  textAlign(LEFT, TOP);
  text("Cookies Per Second: " + round(cookiesPerSecond, 1), 5, 20);
}

function createUpgradeButtonHandler(upgrade, button) {
  return function () {
    if (cookies >= upgrade.cost) {
      cookies -= upgrade.cost;
      if (upgrade.type === 'click') {
        cookiesPerClick += upgrade.increase;
      } else {
        cookiesPerSecond += upgrade.increase;
      }
      upgrade.cost *= 1.2;

      button.html(upgrade.name + '<br> (+ ' + upgrade.increase + (upgrade.type === 'click' ? ' Per Click' : ' Per Second') + ') <br> Cost: ' + round(upgrade.cost));
    } else {
      alert('Not enough cookies');
    }
  };
}

function autoCookies() {
  if (frameCount % 60 === 0 && frameCount !== lastSecond) {
    cookies += cookiesPerSecond;
    lastSecond = frameCount;
  }
}

function cookieClicked() {
  cookies += cookiesPerClick;
}
