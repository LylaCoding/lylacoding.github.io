let contactBox = false;
let messageBox = false;
let closeButton;
let displayedText;
let messages = [];

let contacts = [
    "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O",
    "P", "R", "S", "T",
    "U", "V", "W", "Y", "Parent", "Sibling", "Closest Friend", "Online Friend", "Course/Class Mate", "Coworker", "Flat/House Mate"
];

function preload() {
    messages = loadStrings('messages.txt');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let buttonSize = min(windowWidth, windowHeight) * 0.15;

    let contactButton = createImg('ContactButton.png', 'Contact Button');
    contactButton.size(contactButton.width / 2, contactButton.height / 2)
    contactButton.position((windowWidth / 2) - windowWidth * 0.45, (windowHeight / 2) - windowHeight * 0.45)
    contactButton.mousePressed(contactClicked)

    let messageButton = createImg('MessageButton.png', 'Message Button');
    messageButton.size(messageButton.width / 2, messageButton.height / 2)
    messageButton.position((windowWidth / 2) + ((windowWidth * 0.45) - messageButton.width), (windowHeight / 2) - windowHeight * 0.45)
    messageButton.mousePressed(messageClicked)
}

function draw() {
    background(245, 169, 184);

    if (contactBox || messageBox) {
        displayBox(displayedText);
    } else {
        if (closeButton) {
            closeButton.remove();
            closeButton = undefined;
        }
        displayedText = null;
    }
}

function displayBox(boxText) {
    textAlign(CENTER, CENTER);
    let rectWidth = min(width, height) * 0.4;
    let rectHeight = min(width, height) * 0.6;
    let rectX = (width - rectWidth) / 2;
    let rectY = ((height - rectHeight) / 2)+60;

    textSize(min(width, height) * 0.04);
    textFont("Comic Sans MS");

    fill(255);
    rect(rectX, rectY, rectWidth, rectHeight, 20);
    fill(0);
    text(boxText, rectX + 10, rectY + rectHeight / 2, rectWidth - 20);

    if (!closeButton) {
        loadCloseButton(rectX + rectWidth / 2, rectY + rectHeight - 20);
    }
}

function loadCloseButton(x, y) {
    closeButton = createButton('Discard Card');
    closeButton.position(x - closeButton.width / 2, y);
    closeButton.mousePressed(closeBoxFunc);
}

function contactClicked() {
    contactBox = true;
    messageBox = false;
    displayedText = contacts[floor(random(contacts.length))];
}

function messageClicked() {
    messageBox = true;
    contactBox = false;
    displayedText = messages[floor(random(messages.length))];
}

function closeBoxFunc() {
    contactBox = false;
    messageBox = false;
}
