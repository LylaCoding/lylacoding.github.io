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

    let buttonSize = min(windowWidth, windowHeight) * 0.2; // Adjust button size based on screen size

    let contactButton = createImg('ContactButton.png', 'Contact Button');
    contactButton.size(buttonSize, buttonSize);
    contactButton.position(windowWidth * 0.25 - buttonSize / 2, windowHeight / 2 - buttonSize / 2);
    contactButton.mousePressed(contactClicked);

    let messageButton = createImg('MessageButton.png', 'Message Button');
    messageButton.size(buttonSize, buttonSize);
    messageButton.position(windowWidth * 0.75 - buttonSize / 2, windowHeight / 2 - buttonSize / 2);
    messageButton.mousePressed(messageClicked);
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
        displayedText = null; // Reset displayedText when no box is displayed
    }
}

function displayBox(boxText) {
    textAlign(CENTER, CENTER);
    let rectWidth = min(width, height) * 0.4; // Adjust box size based on screen size
    let rectHeight = min(width, height) * 0.6;
    let rectX = (width - rectWidth) / 2;
    let rectY = (height - rectHeight) / 2;

    textSize(min(width, height) * 0.04); // Adjust text size based on screen size
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
