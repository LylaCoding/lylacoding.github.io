// List of times in HH:mm format
const times = [
    "08:07", "08:22", "08:37", "08:52", "09:07", "09:22", "09:37", "09:52", 
    "10:07", "10:22", "10:42", "11:02", "11:22", "11:42", "12:02", "12:22", 
    "12:42", "13:02", "13:22", "13:42", "14:02", "14:22", "14:37", "14:52", 
    "15:07", "15:22", "15:37", "15:52", "16:07", "16:22", "16:37", "16:52", 
    "17:07", "17:22", "17:37", "17:52", "18:07", "18:47", "19:27", "20:07", 
    "20:47", "21:27", "22:07", "22:47", "23:37"
];

// Function to get the current time in HH:mm format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to find the next two times from the list
function getNextTimes() {
    const currentTime = getCurrentTime();
    let nextTimes = [];

    // Find the next two times that are later than the current time
    for (let time of times) {
        if (time > currentTime) {
            nextTimes.push(time);
            if (nextTimes.length === 2) {
                return nextTimes;
            }
        }
    }

    // If less than two times are found (past the last time of the day), wrap around to the next day
    while (nextTimes.length < 2) {
        nextTimes.push(times[nextTimes.length]);
    }

    return nextTimes;
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

// Display the next two times and the time left until them
function updateDisplay() {
    const currentTime = getCurrentTime();
    const [nextTime, secondNextTime] = getNextTimes();
    const timeDifference = calculateTimeDifference(currentTime, nextTime);
    const secondTimeDifference = calculateTimeDifference(currentTime, secondNextTime);

    document.getElementById("next-time").textContent = `Next Scheduled Bus: ${nextTime}`;
    document.getElementById("time-left").textContent = `Time Until: ${timeDifference} minutes`;
    document.getElementById("second-next-time").textContent = `Following Bus: ${secondNextTime}`;
    document.getElementById("second-time-left").textContent = `Time Until: ${secondTimeDifference} minutes`;
}

// Run the function to update the display
updateDisplay();