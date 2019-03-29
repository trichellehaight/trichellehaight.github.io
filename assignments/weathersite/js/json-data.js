let output = document.querySelector('div.datacolumns');

let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  let townData = request.response;
  let number = 0;
  let townNames = townData['towns'];
  console.log = (townData);

  for (let i = 0; i <townNames.length; i++) {

    if (townNames[i].name == "Preston" || townNames[i].name == "Soda Springs" || townNames[i].name == "Fish Haven") {
      
      let divTownNames = document.createElement('div');
      divTownNames.setAttribute('class', 'dataColumns');
      let myH3 = document.createElement('h3');
      let myP1 = document.createElement('p');
      let myP2 = document.createElement('p');
      let myP3 = document.createElement('p');
      let myP4 = document.createElement('p');
      let img = document.createElement('img');
      let sspringsimg = document.createElement('img');
      let fishhavenimg = document.createElement('img');

      img.src = "images/column1.jpg";
      sspringsimg.src = "images/column2.jpg";
      fishhavenimg.src = "images/column3.jpg";

      myH3.textContent = townNames[i].name;
      myP1.textContent = townNames[i].motto;
      myP2.textContent = "Year Founded: " + townNames[i].yearFounded;
      myP3.textContent = "Current Population: " + townNames[i].currentPopulation;
      myP4.textContent = "Average Rainfall: " + townNames[i].averageRainfall + '"';

      divTownNames.appendChild(myH3);
      divTownNames.appendChild(myP1);
      divTownNames.appendChild(myP2);
      divTownNames.appendChild(myP3);
      divTownNames.appendChild(myP4);

      output.appendChild(divTownNames);

      switch (number) {
          case 0: divTownNames.appendChild(img);
              break;

          case 1: divTownNames.appendChild(sspringsimg);

              break;
          case 2: divTownNames.appendChild(fishhavenimg);
      }
      number++;
    }
  }
}

