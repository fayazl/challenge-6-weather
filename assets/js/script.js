var cityForm = document.querySelector("#input-form")
var cityInput = document.querySelector("#searchbox")
var cityHistory = document.querySelector("#cityhistory")
var currentCityEl = document.querySelector("currentcity")
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



var getWeatherData = function(cityName){

    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + appID;

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
          alert('Error: ' + response.statusText);
        }
      });
};

cityForm.addEventListener("submit", submitForm);

  