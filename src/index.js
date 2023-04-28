let today = new Date();
let dayname1 = today.getDay();
let daysofWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Fraiday",
  "Saturday",
];
let dayVal = daysofWeek[dayname1];
let hour = today.getHours();
let minute = today.getMinutes();
let dayname2 = document.querySelector(".dayName");
dayname2.innerHTML = `${dayVal} ${hour} : ${minute}`;
//day1
dayweek1 = dayname1 + 1;
if (dayweek1 > 6) {
  dayweek1 = dayweek1 - 6;
}
let dayVal2 = daysofWeek[dayweek1];
let weekday1 = document.querySelector(".weekdays1");
weekday1.innerHTML = `${dayVal2}`;
//day2
dayweek2 = dayname1 + 2;
if (dayweek2 > 6) {
  dayweek2 = dayweek2 - 6;
}
let dayVal3 = daysofWeek[dayweek2];
let weekday2 = document.querySelector(".weekdays2");
weekday2.innerHTML = `${dayVal3}`;
//day3
dayweek3 = dayname1 + 3;
if (dayweek3 > 6) {
  dayweek3 = dayweek3 - 6;
}
let dayVal4 = daysofWeek[dayweek3];
let weekday3 = document.querySelector(".weekdays3");
weekday3.innerHTML = `${dayVal4}`;
//day4
dayweek4 = dayname1 + 4;
if (dayweek4 > 6) {
  dayweek4 = dayweek4 - 6;
}
let dayVal5 = daysofWeek[dayweek4];
let weekday4 = document.querySelector(".weekdays4");
weekday4.innerHTML = `${dayVal5}`;
//day5
dayweek5 = dayname1 + 5;
if (dayweek5 > 6) {
  dayweek5 = dayweek5 - 6;
}
let dayVal6 = daysofWeek[dayweek5];
let weekday5 = document.querySelector(".weekdays5");
weekday5.innerHTML = `${dayVal6}`;
//day6
dayweek6 = dayname1 + 6;
if (dayweek6 > 6) {
  dayweek6 = dayweek6 - 6;
}
let dayVal7 = daysofWeek[dayweek6];
let weekday6 = document.querySelector(".weekdays6");
weekday6.innerHTML = `${dayVal7}`;
