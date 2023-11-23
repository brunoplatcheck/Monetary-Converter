
const yenCotation = 148.40;
const dolarCotation = 5.32;
const name = prompt("Insert your name: ");
let years;


alert('Hello ' + name + '!');
const dolarValue = prompt("Insert a value of dolar= ");
const lightYears = prompt("Insert a value of light years to convert: ");

const lightSpeed = 299792458;
const secondsPerYear = 31557600;

const convertLightYearToMeters = (lightYears) => {
  return lightYears * lightSpeed * secondsPerYear;
};

const distanceInMeters = convertLightYearToMeters(lightYears);

let valorInReal = dolarValue * dolarCotation;

valorInReal = valorInReal.toFixed(2);
alert('Hello ' + name + '!');
alert('R$ ' + valorInReal);

valorInReal = dolarValue * yenCotation;
valorInReal = valorInReal.toFixed(2);
alert('R$ ' + valorInReal);

alert(distanceInMeters.toFixed(2));