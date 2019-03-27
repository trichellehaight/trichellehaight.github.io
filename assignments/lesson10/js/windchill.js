function callWindChill() {
    let temp = parseInt(document.getElementById('temp').innerHTML);
    let speed = parseInt(document.getElementById('speed').innerHTML);
    let answer = Math.round(windChill(temp,speed));
    document.getElementById("windchill").innerHTML = answer;

function windChill(temp, speed) {
    let f = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp) * (Math.pow(speed, 0.16)));
    return f;
}
}