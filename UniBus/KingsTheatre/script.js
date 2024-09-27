// List of times in HH:mm format
const times = [
    "07:44", "07:59", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", 
    "09:45", "10:00", "10:15", "10:30", "10:50", "11:10", "11:30", "11:50", 
    "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:10", "14:30", 
    "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", 
    "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:55", 
    "19:32", "20:12", "20:52", "21:32", "22:12", "22:52", "23:32"
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
