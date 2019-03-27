let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=db1c5ce9a74473cd07682ac84ee4bbc7";
weatherRequest.open("Get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {

    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById("current").innerHTML = weatherData.weather[0].description;
    document.getElementById("high").innerHTML = weatherData.main.temp_max;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("wind").innerHTML = weatherData.wind.speed;
    document.getElementById("windchill").innerHTML = windChill(weatherData.main.temp_max, weatherData.wind.speed).toFixed(2);

}