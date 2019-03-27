let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5678757&units=imperial&APPID=db1c5ce9a74473cd07682ac84ee4bbc7";
weatherRequest.open("Get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {

    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById("currently").innerHTML = weatherData.weather[0].description;
    document.getElementById("temp").innerHTML = weatherData.main.temp_max.toFixed(1);
    document.getElementById("humidity").innerHTML = weatherData.main.humidity.toFixed(1);
    document.getElementById("wind").innerHTML = weatherData.wind.speed.toFixed(1);

    let wind = parseInt(weatherData.wind.speed, 10);
    let temp = parseInt(weatherData.main.temp_max, 10);

    windchill(wind, temp);

}