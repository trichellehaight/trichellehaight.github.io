let forecastRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=db1c5ce9a74473cd07682ac84ee4bbc7';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    
    var day = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thurs";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    for (i = 1; i <= 5; i++) {
        var n = weekday[(day.getDay() + i) % 7];
        document.getElementById("forecastday" + i).innerHTML = n;

    }

    let temp = [];
    let icon = [];
    let days = 1;
    let desc = [];
    let dates = [];

    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.includes('18:00:00')) {
            temp[days] = forecastData.list[i].main.temp_max;
            icon[days] = "http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
            desc[days] = forecastData.list[i].weather[0].description;
            days++;
            }
        }

    for (let i = 1; i <= 5; i++) { 
    document.getElementById('high' + i).innerHTML = temp[i];
    document.getElementById('cc-img' + i).setAttribute('src', icon[i]);
    document.getElementById('cc-img' + i).setAttribute('alt', desc[i]);
    }
}