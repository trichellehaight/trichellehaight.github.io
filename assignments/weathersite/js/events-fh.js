let townevents = document.querySelector('#townevents'); 
let section = document.querySelector('section');      
let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
        
request.onload = function() {

    let responsedata = request.response;
    let city = responsedata['towns'];

    for (let i = 0; i < city.length; i++) {

        if (city[i].name == "Fish Haven") {
            let events = city[i].events;
            let eventNum = 0;

            for (let j = 0; j < events.length; j++) {
                let event = events[eventNum];
                eventNum++;
                
            let myArticle = document.createElement('article');
            let myH3 = document.createElement('h3');
            myH3.textContent = event;
    
            myArticle.appendChild(myH3);
            townevents.appendChild(myArticle);  

            }
        }
    } 
};