const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDown = new Date('Jan 30, 2020 00:00:00').getTime(),
x = setInterval(function() {

  let now = new Date().getTime(),
  distance = countDown - now;

  let dayStr = Math.floor(distance / (day)).toString()
  let hourStr = Math.floor((distance % (day)) / (hour)).toString()
  let minuteStr = Math.floor((distance % (hour)) / (minute)).toString()
  let secondStr = Math.floor((distance % (minute)) / second).toString()

  dayStr = dayStr.length === 1 ? '0' + dayStr : dayStr;
  hourStr = hourStr.length === 1 ? '0' + hourStr : hourStr;
  minuteStr = minuteStr.length === 1 ? '0' + minuteStr : minuteStr;
  secondStr = secondStr.length === 1 ? '0' + secondStr : secondStr;

  document.getElementById('days').innerText = dayStr,
  document.getElementById('hours').innerText = hourStr,
  document.getElementById('minutes').innerText = minuteStr,
  document.getElementById('seconds').innerText = secondStr;
}, second)