const convertBtn = document.getElementById('convert-btn');
const lengthOutput = document.getElementById('length');
const weightOutput = document.getElementById('weight');
const volumeOutput = document.getElementById('volume');
const inputField = document.getElementById('input');

function convert() {
  lengthOutput.innerHTML = `${inputField.value} km = ${(inputField.value * 0.621371).toFixed(3)} mi | ${inputField.value} mi = ${(inputField.value * 1.60934).toFixed(3)} km`;
  volumeOutput.innerHTML = `${inputField.value} ml = ${(inputField.value * 0.033814).toFixed(3)} oz | ${inputField.value} oz = ${(inputField.value * 29.5735).toFixed(3)} ml`;
  weightOutput.innerHTML = `${inputField.value} kg = ${(inputField.value * 2.20462).toFixed(3)} lb | ${inputField.value} lb = ${(inputField.value * 0.453592).toFixed(3)} kg`;
}

convertBtn.addEventListener('click', () => {
  convert();
});
