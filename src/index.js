let apiKey = "o40a0fe506b7a43e2efa89dt4adcd7fb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=tabriz&key=${apiKey}&units=metric`;
let apiForecast = `https://api.shecodes.io/weather/v1/forecast?query=tabriz&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
function displayTemperature(response) {
  let temperatureElementt = document.querySelector("#temperatureValue");
  temperatureElementt.innerHTML = Math.round(response.data.temperature.current);
  let cityElementt = document.querySelector(".cityName");
  cityElementt.innerHTML = response.data.city;
  let descriptionElementt = document.querySelector(".clouds");
  descriptionElementt.innerHTML = response.data.condition.description;
  let humidityElementt = document.querySelector(".hvalue");
  humidityElementt.innerHTML = response.data.temperature.humidity;
  let windelEmentt = document.querySelector("#wvaluee");
  windelEmentt.innerHTML = Math.round(response.data.wind.speed);
  let dateElement=document.querySelector(".dayName");
  dateElement.innerHTML=formatDate(response.data.time*1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src",response.data.condition.icon_url)
}
axios.get(apiForecast).then(displayDaysTemp);
function displayDaysTemp(response) {
  let temperatureday1 = document.querySelector("#day1temp");
  temperatureday1.innerHTML = Math.round(
    response.data.daily[0].temperature.day
  );
  let temperatureday1min = document.querySelector("#daytemp1min");
  temperatureday1min.innerHTML = Math.round(
    response.data.daily[0].temperature.minimum
  );
  let temperatureday1max = document.querySelector("#daytemp1max");
  temperatureday1max.innerHTML = Math.round(
    response.data.daily[0].temperature.maximum
  );
  let iconElement1 = document.querySelector("#day1icon");
  iconElement1.setAttribute("src", response.data.daily[0].condition.icon_url);

  let temperatureday2 = document.querySelector("#day2temp");
  temperatureday2.innerHTML = Math.round(
    response.data.daily[1].temperature.day
  );
  let temperatureday2min = document.querySelector("#daytemp2min");
  temperatureday2min.innerHTML = Math.round(
    response.data.daily[1].temperature.minimum
  );
  let temperatureday2max = document.querySelector("#daytemp2max");
  temperatureday2max.innerHTML = Math.round(
    response.data.daily[1].temperature.maximum
  );
  let iconElement2 = document.querySelector("#day2icon");
  iconElement2.setAttribute("src", response.data.daily[1].condition.icon_url);

  let temperatureday3 = document.querySelector("#day3temp");
  temperatureday3.innerHTML = Math.round(
    response.data.daily[2].temperature.day
  );
  let temperatureday3min = document.querySelector("#daytemp3min");
  temperatureday3min.innerHTML = Math.round(
    response.data.daily[2].temperature.minimum
  );
  let temperatureday3max = document.querySelector("#daytemp3max");
  temperatureday3max.innerHTML = Math.round(
    response.data.daily[2].temperature.maximum
  );
let iconElement3 = document.querySelector("#day3icon");
iconElement3.setAttribute("src", response.data.daily[2].condition.icon_url);
  let temperatureday4 = document.querySelector("#day4temp");
  temperatureday4.innerHTML = Math.round(
    response.data.daily[3].temperature.day
  );
 let temperatureday4min = document.querySelector("#daytemp4min");
 temperatureday4min.innerHTML = Math.round(
   response.data.daily[3].temperature.minimum
 );
 let temperatureday4max = document.querySelector("#daytemp4max");
 temperatureday4max.innerHTML = Math.round(
   response.data.daily[3].temperature.maximum
 );
let iconElement4 = document.querySelector("#day4icon");
iconElement4.setAttribute("src", response.data.daily[3].condition.icon_url);
  let temperatureday5 = document.querySelector("#day5temp");
  temperatureday5.innerHTML = Math.round(
    response.data.daily[4].temperature.day
  );
 let temperatureday5min = document.querySelector("#daytemp5min");
 temperatureday5min.innerHTML = Math.round(
   response.data.daily[4].temperature.minimum
 );
 let temperatureday5max = document.querySelector("#daytemp5max");
 temperatureday5max.innerHTML = Math.round(
   response.data.daily[4].temperature.maximum
 );
let iconElement5 = document.querySelector("#day5icon");
iconElement5.setAttribute("src", response.data.daily[4].condition.icon_url);
  let temperatureday6 = document.querySelector("#day6temp");
  temperatureday6.innerHTML = Math.round(
    response.data.daily[5].temperature.day
  );
   let temperatureday6min = document.querySelector("#daytemp6min");
   temperatureday6min.innerHTML = Math.round(
     response.data.daily[5].temperature.minimum
   );
   let temperatureday6max = document.querySelector("#daytemp6max");
   temperatureday6max.innerHTML = Math.round(
     response.data.daily[5].temperature.maximum
   );
   let iconElement6 = document.querySelector("#day6icon");
   iconElement6.setAttribute("src", response.data.daily[5].condition.icon_url);
}
//date and time 
/* let today = new Date();
let dayname1 = today.getDay();
let daysofWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
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
  dayweek1 = dayweek1 - 7;
}
let dayVal2 = daysofWeek[dayweek1];
let weekday1 = document.querySelector(".weekdays1");
weekday1.innerHTML = `${dayVal2}`;
//day2
dayweek2 = dayname1 + 2;
if (dayweek2 > 6) {
  dayweek2 = dayweek2 - 7;
}
let dayVal3 = daysofWeek[dayweek2];
let weekday2 = document.querySelector(".weekdays2");
weekday2.innerHTML = `${dayVal3}`;
//day3
dayweek3 = dayname1 + 3;
if (dayweek3 > 6) {
  dayweek3 = dayweek3 - 7;
}
let dayVal4 = daysofWeek[dayweek3];
let weekday3 = document.querySelector(".weekdays3");
weekday3.innerHTML = `${dayVal4}`;
//day4
dayweek4 = dayname1 + 4;
if (dayweek4 > 6) {
  dayweek4 = dayweek4 - 7;
}
let dayVal5 = daysofWeek[dayweek4];
let weekday4 = document.querySelector(".weekdays4");
weekday4.innerHTML = `${dayVal5}`;
//day5
dayweek5 = dayname1 + 5;
if (dayweek5 > 6) {
  dayweek5 = dayweek5 - 7;
}
let dayVal6 = daysofWeek[dayweek5];
let weekday5 = document.querySelector(".weekdays5");
weekday5.innerHTML = `${dayVal6}`;
//day6
dayweek6 = dayname1 + 6;
if (dayweek6 > 6) {
  dayweek6 = dayweek6 - 7;
}
let dayVal7 = daysofWeek[dayweek6];
let weekday6 = document.querySelector(".weekdays6");
weekday6.innerHTML = `${dayVal7}`; */
//time and date 2
function formatDate(timesteps){
  let date=new Date(timesteps);
  let hours=date.getHours();
  let minutes=date.getMinutes();
  let day= date.getDay();
  let dayname = daysofWeek[day];
  if (minutes<10){
minutes=`0${minutes}`
  }
  if (hours<10){
    hours=`0${hours}`
  }
  //day1
  dayweek1 = day + 1;
  if (dayweek1 > 6) {
    dayweek1 = dayweek1 - 7;
  }
  let dayVal2 = daysofWeek[dayweek1];
  let weekday1 = document.querySelector(".weekdays1");
  weekday1.innerHTML = `${dayVal2}`;
  //day2
  dayweek2 = day + 2;
  if (dayweek2 > 6) {
    dayweek2 = dayweek2 - 7;
  }
  let dayVal3 = daysofWeek[dayweek2];
  let weekday2 = document.querySelector(".weekdays2");
  weekday2.innerHTML = `${dayVal3}`;
  //day3
  dayweek3 = day + 3;
  if (dayweek3 > 6) {
    dayweek3 = dayweek3 - 7;
  }
  let dayVal4 = daysofWeek[dayweek3];
  let weekday3 = document.querySelector(".weekdays3");
  weekday3.innerHTML = `${dayVal4}`;
  //day4
  dayweek4 = day + 4;
  if (dayweek4 > 6) {
    dayweek4 = dayweek4 - 7;
  }
  let dayVal5 = daysofWeek[dayweek4];
  let weekday4 = document.querySelector(".weekdays4");
  weekday4.innerHTML = `${dayVal5}`;
  //day5
  dayweek5 = day + 5;
  if (dayweek5 > 6) {
    dayweek5 = dayweek5 - 7;
  }
  let dayVal6 = daysofWeek[dayweek5];
  let weekday5 = document.querySelector(".weekdays5");
  weekday5.innerHTML = `${dayVal6}`;
  //day6
  dayweek6 = day + 6;
  if (dayweek6 > 6) {
    dayweek6 = dayweek6 - 7;
  }
  let dayVal7 = daysofWeek[dayweek6];
  let weekday6 = document.querySelector(".weekdays6");
  weekday6.innerHTML = `${dayVal7}`;
 return`${dayname} ${hours}:${minutes}`
}
let daysofWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//form
function search (city){
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let apiForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  axios.get(apiForecast).then(displayDaysTemp);
}
function handleSubmit (event){
  event.preventDefault();
  let cityInputElement=document.querySelector("#inputCityName");
 search(cityInputElement.value)
}

let form =document.querySelector("#inputCity");
form.addEventListener("submit",handleSubmit)