// List of times in HH:mm format
const times = [
    "08:11", "08:26", "08:41", "08:56", "09:11", "09:26", "09:41", "09:56", 
    "10:11", "10:26", "10:46", "11:06", "11:26", "11:46", "12:06", "12:26", 
    "12:46", "13:06", "13:26", "13:46", "14:06", "14:26", "14:41", "14:56", 
    "15:11", "15:26", "15:41", "15:56", "16:11", "16:26", "16:41", "16:56", 
    "17:11", "17:26", "17:41", "17:56", "18:11", "18:51", "19:30", "20:10", 
    "20:50", "21:30", "22:10", "22:50", "23:30"
];

// Function to get the current time in HH:mm format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to find the next time from the list
function getNextTime() {
    const currentTime = getCurrentTime();

    // Find the next time that is later than the current time
    for (let time of times) {
        if (time > currentTime) {
            return time;
        }
    }

    // If no time is found (past the last time of the day), return the first time for the next day
    return times[0];
}

// Function to calculate the difference between two times in minutes
function calculateTimeDifference(current, next) {
    const [currentHours, currentMinutes] = current.split(':').map(Number);
    const [nextHours, nextMinutes] = next.split(':').map(Number);

    // Convert both times to minutes since midnight
    const currentTotalMinutes = currentHours * 60 + currentMinutes;
    const nextTotalMinutes = nextHours * 60 + nextMinutes;

    // Calculate the difference in minutes
    if (nextTotalMinutes >= currentTotalMinutes) {
        return nextTotalMinutes - currentTotalMinutes;
    } else {
        // If the next time is for the next day (past midnight), account for the full day (1440 minutes)
        return (1440 - currentTotalMinutes) + nextTotalMinutes;
    }
}

// Display the next time and the time left until it
function updateDisplay() {
    const currentTime = getCurrentTime();
    const nextTime = getNextTime();
    const timeDifference = calculateTimeDifference(currentTime, nextTime);

    document.getElementById("next-time").textContent = `Next Scheduled Bus: ${nextTime}`;
    document.getElementById("time-left").textContent = `Time Until: ${timeDifference} minutes`;
}

// Run the function to update the display
updateDisplay();
