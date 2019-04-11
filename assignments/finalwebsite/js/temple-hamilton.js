let templedates = document.querySelector('#templedates'); 
let section = document.querySelector('section');      
let requestURL = "https://trichellehaight.github.io/assignments/finalwebsite/templeinfo.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
        
request.onload = function() {

    let responsedata = request.response;
    let info = responsedata['temples'];

    for (let i = 0; i < info.length; i++) {

        if (info[i].name == "Hamilton, New Zealand") {
            let closures = info[i].closures;
            let infoNum = 0;

            for (let j = 0; j < closures.length; j++) {
                let days = closures[infoNum];
                infoNum++;
                
            let myArticle = document.createElement('article');
            let myH4 = document.createElement('h4');
            myH4.textContent = days;
    
            myArticle.appendChild(myH4);
            templedates.appendChild(myArticle);  

            }
        }
    } 
};