const daysContainer = document.querySelector(".days");
const hoursContainer = document.querySelector(".hours");
const minsContainer = document.querySelector(".mins");
const secondsContainer = document.querySelector(".seconds");
const newYears = "1 Jan 2021";

function count() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  daysContainer.innerHTML = timeFormat(days);
  hoursContainer.innerHTML = timeFormat(hours);
  minsContainer.innerHTML = timeFormat(mins);
  secondsContainer.innerHTML = timeFormat(seconds);
}

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
setInterval(count, 0.000001);
