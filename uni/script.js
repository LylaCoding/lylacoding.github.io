let time = 120; // 2 minutes in seconds
let timerInterval;
const timerDisplay = document.getElementById('timer');

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timerDisplay.textContent = `${minutes}:${seconds}`;
    
    if (time <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Time Up!';
    } else {
        time--;
    }
}


function handleClickEvent(infoBoxId, closeButtonId) {
    var infoBox = document.getElementById(infoBoxId);
    infoBox.style.display = "block";

    var closeButton = document.getElementById(closeButtonId);
    closeButton.addEventListener("click", function () {
        infoBox.style.display = "none";
    });

    var allInfoBoxes = document.querySelectorAll(".infoBox");
    allInfoBoxes.forEach(function (box) {
        if (box.id !== infoBoxId) {
            box.style.display = "none";
        }
    });
}

function clickFan(event) {
    handleClickEvent("fanInfoBox", "closeFanButton");
    console.log("fan open");
}

function clickOven(event) {
    handleClickEvent("ovenInfoBox", "closeOvenButton");
    console.log("oven open");
}

function clickFridge(event) {
    handleClickEvent("fridgeInfoBox", "closeFridgeButton");
    console.log("fridge open");
}



