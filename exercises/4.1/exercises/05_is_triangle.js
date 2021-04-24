let angleA = 30;
let angleB = 90;
let angleC = 60;

let angleTotal = angleA + angleB + angleC;

if ((angleA > 0 || angleB > 0 || angleC > 0) && angleTotal === 180) {
    console.log('True!');
} else {
    console.log('False!');
};