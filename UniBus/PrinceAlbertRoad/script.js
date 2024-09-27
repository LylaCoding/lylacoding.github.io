// List of times in HH:mm format
const times = [
    "07:42", "07:57", "08:15", "08:32", "08:47", "09:02", "09:16", "09:28", 
    "09:43", "09:58", "10:13", "10:28", "10:43", "11:03", "11:23", "11:43", 
    "12:03", "12:23", "12:43", "13:03", "13:23", "13:43", "14:03", "14:23", 
    "14:43", "14:58", "15:13", "15:28", "15:46", "16:02", "16:17", "16:32", 
    "16:47", "17:02", "17:17", "17:32", "17:47", "18:02", "18:16", "18:28", 
    "19:08", "19:43", "20:23", "21:03", "21:43", "22:23", "23:03", "23:43"
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
