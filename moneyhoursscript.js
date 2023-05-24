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
