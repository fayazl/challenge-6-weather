var cityForm = document.querySelector("#input-form")
var cityInput = document.querySelector("#searchbox")
var cityHistory = document.querySelector("#cityhistory")
var currentCityEl = document.querySelector("currentcity")
var currentCityName = document.querySelector("#city-name");
var forecastEl = document.querySelector("forecast1")
var appID = 'e8ff1c915669e501ef5ce09733f67d05'


var submitForm = function(event) {    
    
    event.preventDefault();

    var cityName = cityInput.value.trim();
    
    if (cityName) {
        getWeatherData(cityName);
        cityInput.value = "";
    } else {
        alert("Please Enter a City Name")
    }

}


// var appendHistory

var getWeatherData = function(cityName){

    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial' + '&appid=' + appID;

    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
              displayWeatherData(data,cityName)
          console.log(data);
          });
        } else {
          alert("Please check your input and try again");
        }
        });
};


var displayWeatherData = function(data,cityName){
    
    var todaysDate = document.querySelector("#datetoday")
    var today = moment().format('L');

    var todaysTemp = document.querySelector("#temp")
    var temp = data.main.temp;

    var todaysWind = document.querySelector("#wind")
    var wind = data.wind.speed;
    
    var todaysHumidity = document.querySelector("#humidity")
    var humidity = data.main.humidity;

    currentCityName.textContent = cityName;
    todaysDate.textContent = today;
    todaysTemp.textContent = "Temperature: " + temp +" F";
    todaysWind.textContent = "Wind: " + wind + " MPH";
    todaysHumidity.textContent = "Humidity: " + humidity + " %"


    var lat = data.coord.lat
    var lon = data.coord.lon

    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,daily,minutely&appid=' + appID;

    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
              
          console.log(data);
          });
        } else {
          alert("Please check your input and try again");
        }
        });

    // var todaysUVI = document.querySelector("#uv-index")
    // var uvi = data.current.uvi;
    // todaysUVI.textContent = uvi;    

    


    console.log(data);
    console.log(cityName);
    console.log(temp);
}





cityForm.addEventListener("submit", submitForm);

