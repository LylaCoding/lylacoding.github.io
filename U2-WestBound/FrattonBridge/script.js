// List of times in HH:mm format
const times = [
"08:03", "08:28", "08:53", "09:18", "09:43", "10:33", "11:23", "12:13", "13:03", "13:53", "14:43", "15:33", "16:23", "16:53", "17:23", "17:53", "18:43", "19:33", "20:23", "21:13", "22:23"
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