const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Jan 30, 2020 00:00:00').getTime(),
  x = setInterval(function() {

  let now = new Date().getTime(),
    distance = countDown - now;

  let dayStr = Math.floor(distance / (day)).toString(),
    hourStr = Math.floor((distance % (day)) / (hour)).toString(),
    minuteStr = Math.floor((distance % (hour)) / (minute)).toString(),
    secondStr = Math.floor((distance % (minute)) / second).toString();

  document.getElementById('days').innerText = setDoubleDigit(dayStr);
  document.getElementById('hours').innerText = setDoubleDigit(hourStr);
  document.getElementById('minutes').innerText = setDoubleDigit(minuteStr);
  document.getElementById('seconds').innerText = setDoubleDigit(secondStr);
}, second);

function setDoubleDigit(str) {
  return str.length === 1 ? '0' + str : str;
}
