let now = new Date();
function capitalizeTheFirstLetterOfEachWord(words) {
  var separateWord = words.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}
function formatDate() {
  let now = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[now.getMonth()];
  let day = now.getDate();
  let yearNumber = now.getFullYear();

  let today = month + " " + day + ", " + yearNumber;
  return today;
}
function displayWeatherCondition(response) {
  console.log(response.data.name);
  document.querySelector("#replacecity").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =
    Math.round(response.data.main.temp) + "°";
}
function search(city) {
  let apiKey = "5a9998f3550781385b7bbc2d7f623480";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  search(city);
}
function cambiarcentigrados(event) {
  event.preventDefault;
  let h2 = document.querySelector("h2");
  h2.innerHTML = "23°";
}
//function taken from https://www.tutorialspoint.com/how-to-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript#:~:text=Courses-,How%20to%20capitalize%20the%20first%20letter%20of,in%20a%20string%20using%20JavaScript%3F&text=At%20first%2C%20you%20need%20to,()%20for%20the%20extracted%20character.

function cambiarfarenheit(event) {
  event.preventDefault;
  let h2 = document.querySelector("h2");
  h2.innerHTML = "73°";
}
function showTemperature(response) {
  let tempearture = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = "it is " + tempearture + " degrees in " + city;
  //let h1 = document.querySelector("h1");
  //h1.innerHTML = message;
  // console.log(h1);
  console.log(message);
}

let cityname = document.querySelector("h3");
cityname.innerHTML = formatDate();

let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);

let centigrados = document.querySelector("#celcius");
centigrados.addEventListener("click", cambiarcentigrados);

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", cambiarfarenheit);

search("Mexico");
