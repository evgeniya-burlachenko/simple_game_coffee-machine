"use strict";

function buyCoffee(name, price, element) {
  
  let balanceInput = document.querySelector("input[placeholder='Баланс']");
 
 if (+balanceInput.value < price)  {
   changeDisplayText("недостаточно средств");
   balanceInput.style.border = "2px solid red";
 } else {
   balanceInput.value -= price;
   balanceInput.style.border = "";
   cookCoffee(name, element);
 }
}

function cookCoffee(name, buttonElement) {
  changeDisplayText("Ваш" + " " + name + " "+ "готовится");
  let progressBar = document.querySelector(".progress-bar");
  console.log(progressBar);
}

function changeDisplayText(text) {
  let displayText = document.querySelector('.display-text');
  displayText.innerHTML = text;
  
}