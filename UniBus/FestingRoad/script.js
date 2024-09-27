// List of times in HH:mm format
const times = [
    "07:48", "08:03", "08:20", "08:35", "08:50", "09:05", "09:19", "09:34", 
    "09:49", "10:04", "10:19", "10:34", "10:54", "11:14", "11:34", "11:54", 
    "12:14", "12:34", "12:54", "13:14", "13:34", "13:54", "14:14", "14:34", 
    "14:49", "15:04", "15:19", "15:34", "15:50", "16:05", "16:20", "16:35", 
    "16:50", "17:05", "17:20", "17:35", "17:50", "18:05", "18:19", "18:59", 
    "19:35", "20:15", "20:55", "21:35", "22:15", "22:55", "23:35"
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
