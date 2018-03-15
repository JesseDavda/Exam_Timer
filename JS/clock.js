var today = new Date(); //currentday
today.setFullYear(today.getFullYear());
today.setMonth(today.getMonth());
today.setDate(today.getDate());
today.setHours(today.getHours());
today.setMinutes(today.getMinutes());
today.setSeconds(today.getSeconds()+1); //added one to fix the countdown being off
today.setMilliseconds(today.getMilliseconds()+1000); //same here

var fdate = new Date(2018, 4, 16, 8, 0, 0, 0); //YYYY, M, D, H, M, S, MS - ALSO always minus one from the month!

var Dif = Math.floor((fdate - today) / 1000); //calculates seconds left until future date

var repeats = 1;

setInterval(() => {
    document.getElementById('time').innerHTML = changeToClockFormat(Dif);
    Dif--;
}, 1000);

function changeToClockFormat(secondsLeft){
    minutesLeft = 0, hoursLeft = 0, daysLeft = 0;
    if(secondsLeft >= 0){
      while(secondsLeft>=60){
        secondsLeft -= 60;
        minutesLeft += 1;
      }
      while(minutesLeft>=60){
        minutesLeft -= 60;
        hoursLeft += 1;
      }
      while(hoursLeft>=24){
        hoursLeft -= 24;
        daysLeft += 1;
      }
      secString = secondsLeft; minString = minutesLeft; hourString = hoursLeft; dayString = daysLeft;
      if (secondsLeft<10){secString = "0" + secondsLeft}
      if (minutesLeft<10){minString = "0" + minutesLeft}
      if (hoursLeft<10){hourString = "0" + hoursLeft}
      if (daysLeft<10){dayString = "0" + daysLeft}
      return dayString + ":" + hourString + ":" + minString + ":" + secString;
    } else {
      return "00:00:00:00"
    }
}
