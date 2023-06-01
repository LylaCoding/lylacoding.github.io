function calculateTime() {
  var hourlyWage = parseFloat(document.getElementById("hourly-wage").value);
  var itemCost = parseFloat(document.getElementById("item-cost").value);

  if (isNaN(hourlyWage) || isNaN(itemCost)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
  } else if (hourlyWage <= 0 || itemCost <= 0) {
    document.getElementById("result").innerHTML = "Please enter positive values.";
  } else {
    var hoursOfWork = itemCost / hourlyWage;
    document.getElementById("result").innerHTML = "You would need to work for " + hoursOfWork + " hours to afford this item.";
  }
}


function calculateDateDifference() {
  const birthdayString = document.getElementById('birthday').value;
  const birthday = new Date(birthdayString);
  const currentDate = new Date();
  const differenceInMilliseconds = Math.abs(currentDate - birthday);
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const amountOfBabiesBorn = Math.floor(differenceInDays * 350000);

  let formattedOutput;
  if (amountOfBabiesBorn >= 1000000000) {
    formattedOutput = (amountOfBabiesBorn / 1000000000).toFixed(1) + ' billion';
  } else if (amountOfBabiesBorn >= 1000000) {
    formattedOutput = (amountOfBabiesBorn / 1000000).toFixed(1) + ' million';
  } else if (amountOfBabiesBorn >= 1000) {
    formattedOutput = (amountOfBabiesBorn / 1000).toFixed(1) + ' thousand';
  } else {
    formattedOutput = amountOfBabiesBorn.toLocaleString();
  }

  document.getElementById('date-result').textContent = `There have been (roughly) ${formattedOutput} people born since you were born.`;
}
