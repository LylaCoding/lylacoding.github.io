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

    let contactButton = createImg('ContactButton.png', 'Contact Button');
    contactButton.size(contactButton.width / 3, contactButton.height / 3)
    contactButton.position((windowWidth / 2) - windowWidth * 0.35, (windowHeight / 2) - windowHeight * 0.35)
    contactButton.mousePressed(contactClicked)

    let messageButton = createImg('MessageButton.png', 'Message Button');
    messageButton.size(messageButton.width / 3, messageButton.height / 3)
    messageButton.position((windowWidth / 2) + ((windowWidth * 0.35) - messageButton.width), (windowHeight / 2) - windowHeight * 0.35)
    messageButton.mousePressed(messageClicked)
}

function draw() {
    background(245, 169, 184);

    if (contactBox) {
        if (!displayedText) {
            displayedText = contacts[floor(random(contacts.length))];
        }
        displayBox(displayedText);
    } else if (messageBox) {
        if (!displayedText) {
            displayedText = messages[floor(random(messages.length))];
        }
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
    let rectX = (width / 2) - 100;
    let rectY = (height / 2) - 50;
  
    textSize(20);
    textWrap(WORD)
    textFont("Comic Sans MS");

    rect(rectX, rectY, 200, 300, 20);
    text(boxText, rectX+7.5, rectY + 150, 185);

    if (!closeButton) {
        loadCloseButton();
    }
}

function loadCloseButton() {
    closeButton = createButton('Discard Card');
    closeButton.position((windowWidth / 2) - closeButton.width / 2, (windowHeight / 2) + 200);
    closeButton.mousePressed(closeBoxFunc);
}

function contactClicked() {
    contactBox = true;
    messageBox = false;
    displayedText = null; // Reset displayedText when switching boxes
}

function messageClicked() {
    messageBox = true;
    contactBox = false;
    displayedText = null; // Reset displayedText when switching boxes
}

function closeBoxFunc() {
    contactBox = false;
    messageBox = false;
    displayedText = null; // Reset displayedText when closing the box
}