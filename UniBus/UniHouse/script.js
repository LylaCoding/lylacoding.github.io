// List of times in HH:mm format
const times = [
    "08:05", "08:20", "08:35", "08:50", "09:05", "09:20", "09:35", "09:50", 
    "10:05", "10:20", "10:40", "11:00", "11:20", "11:40", "12:00", "12:20", 
    "12:40", "13:00", "13:20", "13:40", "14:00", "14:20", "14:35", "14:50", 
    "15:05", "15:20", "15:35", "15:50", "16:05", "16:20", "16:35", "16:50", 
    "17:05", "17:20", "17:35", "17:50", "18:05", "18:45", "19:25", "20:05", 
    "20:45", "21:25", "22:05", "22:45", "23:25"
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