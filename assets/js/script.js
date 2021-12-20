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
};

//generate historical searches





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

    console.log(data);
    console.log(cityName);
    console.log(temp);
    

    var lat = data.coord.lat
    var lon = data.coord.lon

    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=hourly,minutely&appid=' + appID;

    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);

            var todaysUVI = document.querySelector("#uv-index")
            var uvi = data.current.uvi;
            todaysUVI.textContent = "UV Index: " + uvi;


            var cityDaily = {daily: []}
            var windDaily = {daily: []}
            var humidDaily = {daily: []}
            var iconDaily = {daily: []}

            for (var i = 0; i < 6; i++){
                cityDaily.daily.push(data.daily[i].temp.day)
                windDaily.daily.push(data.daily[i].wind_speed)
                humidDaily.daily.push(data.daily[i].humidity)
                iconDaily.daily.push(data.daily[i].weather[0].icon)

                var date1 = document.querySelector("#date1")
                var forecast1 = document.querySelector("#temp1")
                var windy = document.querySelector("#wind1")
                var humid = document.querySelector("#humidity1")
                var dateMoment1 = moment(today).add(1, 'day').format('L')
                var temp1 = cityDaily.daily[1]
                var wind1 = windDaily.daily[1]
                var humid1 = humidDaily.daily[1]
                date1.textContent = dateMoment1;
                forecast1.textContent = "Temp: " + temp1;
                windy.textContent = "Wind: " + wind1;
                humid.textContent = "Humidity: " + humid1;

                var date2 = document.querySelector("#date2")
                var forecast2 = document.querySelector("#temp2")
                var windy = document.querySelector("#wind2")
                var humid = document.querySelector("#humidity2")
                var dateMoment2 = moment(today).add(2, 'day').format('L')
                var temp2 = cityDaily.daily[2]
                var wind2 = windDaily.daily[2]
                var humid2 = humidDaily.daily[2]
                date2.textContent = dateMoment2;
                forecast2.textContent = "Temp: " + temp2; 
                windy.textContent = "Wind: " + wind2;
                humid.textContent = "Humidity: " + humid2;

                var date3 = document.querySelector("#date3")
                var forecast3 = document.querySelector("#temp3")
                var windy = document.querySelector("#wind3")
                var humid = document.querySelector("#humidity3")
                var dateMoment3 = moment(today).add(3, 'day').format('L')
                var temp3 = cityDaily.daily[3]
                var wind3 = windDaily.daily[3]
                var humid3 = humidDaily.daily[3]
                date3.textContent = dateMoment3;
                forecast3.textContent = "Temp: " + temp3; 
                windy.textContent = "Wind: " + wind3;
                humid.textContent = "Humidity: " + humid3;

                var date4 = document.querySelector("#date4")
                var forecast4 = document.querySelector("#temp4")
                var windy = document.querySelector("#wind4")
                var humid = document.querySelector("#humidity4")
                var dateMoment4 = moment(today).add(4, 'day').format('L')
                var temp4 = cityDaily.daily[4]
                var wind4 = windDaily.daily[4]
                var humid4 = humidDaily.daily[4]
                date4.textContent = dateMoment4;
                forecast4.textContent = "Temp: " + temp4; 
                windy.textContent = "Wind: " + wind4;
                humid.textContent = "Humidity: " + humid4;

                var date5 = document.querySelector("#date5")
                var forecast5 = document.querySelector("#temp5")
                var windy = document.querySelector("#wind5")
                var humid = document.querySelector("#humidity5")
                var dateMoment5 = moment(today).add(5, 'day').format('L')
                var temp5 = cityDaily.daily[5]
                var wind5 = windDaily.daily[5]
                var humid5 = humidDaily.daily[5]
                date5.textContent = dateMoment5;
                forecast5.textContent = "Temp: " + temp5; 
                windy.textContent = "Wind: " + wind5;
                humid.textContent = "Humidity: " + humid5;

            }

          var icon0 = iconDaily.daily[0]
          var stringy0 =  String(icon0)
          var src0 = document.getElementById('icon0')
          var img0 = document.createElement("img")
          img0.src = "http://openweathermap.org/img/wn/"+stringy0+"@2x.png";
          src0.innerHTML = "";
          src0.append(img0);
      
          var icon1 = iconDaily.daily[1]
          var stringy1 =  String(icon1)
          var src1 = document.getElementById('icon1')
          var img1 = document.createElement("img")
          img1.src = "http://openweathermap.org/img/wn/"+stringy1+"@2x.png";
          src1.innerHTML = "";
          src1.append(img1);


          var icon2 = iconDaily.daily[2]
          var stringy2 =  String(icon2)
          var src2 = document.getElementById('icon2')
          var img2 = document.createElement("img")
          img2.src = "http://openweathermap.org/img/wn/"+stringy2+"@2x.png";
          src2.innerHTML = "";
          src2.append(img2);

          var icon3 = iconDaily.daily[3]
          var stringy3 =  String(icon3)
          var src3 = document.getElementById('icon3')
          var img3 = document.createElement("img")
          img3.src = "http://openweathermap.org/img/wn/"+stringy3+"@2x.png";
          src3.innerHTML = "";
          src3.append(img3);

          var icon4 = iconDaily.daily[4]
          var stringy4 =  String(icon4)
          var src4 = document.getElementById('icon4')
          var img4 = document.createElement("img")
          src4.innerHTML = "";
          img4.src = "http://openweathermap.org/img/wn/"+stringy4+"@2x.png";
          src4.append(img4);

          var icon5 = iconDaily.daily[5]
          var stringy5 =  String(icon5)
          var src5 = document.getElementById('icon5')
          var img5 = document.createElement("img")
          src5.innerHTML = "";
          img5.src = "http://openweathermap.org/img/wn/"+stringy5+"@2x.png";
          src5.append(img5);

            console.log('cityTemp', cityDaily)
            console.log('windDaily', windDaily)
            console.log('iconDaily', iconDaily)


          });
        } else {
          alert("Please check your input and try again");
        }
        });
    
    
} 

var clearForm = function() {
  document.getElementById('test').innerHTML="";
} 




cityForm.addEventListener("submit", submitForm);

