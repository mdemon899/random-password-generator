// Calling Variables from DOM
const inputBox = document.querySelector("#input_box");
const copyBtn = document.querySelector(".copyBtn");
const generateBtn = document.querySelector("button");


// Creating Random Password Variables
const maxPass = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = `~!@#$%^&*()_-+={[}]|:;"'<,>.?/`;
const allPass = upperCase + lowerCase + numbers + symbols;


// Adding Event Listener For GenerateButton
generateBtn.addEventListener("click", () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (maxPass > password.length) {
    password += allPass[Math.floor(Math.random() * allPass.length)];
  }
  inputBox.value = password;
});


// Adding Event Listener For Copy Button
copyBtn.addEventListener('click',()=>{
  inputBox.select();
  document.execCommand('copy');
});