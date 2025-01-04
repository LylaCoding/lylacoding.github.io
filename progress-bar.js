function calculateSecondsBetweenDates(date1, date2) {
    const timestamp1 = date1.getTime();
    const timestamp2 = date2.getTime();
    const differenceInMilliseconds = Math.abs(timestamp2 - timestamp1);
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    return differenceInSeconds;
}

const staticDate = new Date('2025-01-01T00:00:00');

function logTimeDifference() {
    const currentDate = new Date(); // Current time
    const secondsBetween = calculateSecondsBetweenDates(staticDate, currentDate);
    const yearPercentage = (secondsBetween/31536000)*100;
    const yearPercentageRounded = yearPercentage.toFixed(6);
    //console.log(yearPercentageRounded);
    document.getElementById("yearPercent").innerHTML = ("Currently " + yearPercentageRounded + "% through 2025");
    document.getElementById("progressBarFill").style.width=yearPercentageRounded+"%";
}

setInterval(logTimeDifference, 1000);