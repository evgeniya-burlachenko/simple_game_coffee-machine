"use strict";
let state = "waiting";

let cupImg = document.querySelector(".coffee-cup img");
let progressBar = document.querySelector(".progress-bar");
let balanceInput = document.querySelector("input[placeholder='Баланс']");

cupImg.onclick = takeCoffee;

function buyCoffee(name, price, element) {
  if (state != "waiting") {
    return;
  }
  if (+balanceInput.value < price)  {
   changeDisplayText("недостаточно средств");
   balanceInput.style.border = "2px solid red";
 } else {
   balanceInput.value -= price;
   balanceInput.style.border = "";
   state = "cooking";
   cookCoffee(name, element);
 }
}

function cookCoffee(name, buttonElement) {
  changeDisplayText("Ваш " + name + " готовится");
  let progressBar = document.querySelector(".progress-bar");
  let buttonImg = buttonElement.querySelector("img");
  let cupSrc = buttonImg.getAttribute('src');
  let cupImg = document.querySelector(".coffee-cup img");
  
  cupImg.setAttribute('src', cupSrc);
  cupImg.classList.remove('d-none');
  let i = 0;
  let interval = setInterval(function () {
    i++;
    progressBar.style.width = i + "%";
    cupImg.style.opacity = i + "%";
    if (i == 110) {
      clearInterval(interval);
      changeDisplayText("Ваш " + name + " готов!");
      cupImg.style.cursor = "pointer";
      state = "ready";
    }
  },100);
}

function takeCoffee() {
  if (state !="ready") {
    return;
  }
  state = "waiting";
  cupImg.style.opacity = 0;
  cupImg.style.cursor = "";
  cupImg.classList.add("d-none");
  changeDisplayText("Выберете кофе");
  progressBar.style.width = 0;
}

function changeDisplayText(text) {
  let displayText = document.querySelector('.display-text');
  displayText.innerHTML = text;
}

//-------------------купюры-------------------------------
let bills = document.querySelectorAll('.bills img');

for (let i = 0; i < bills.length; i++) {
  bills[i].onmousedown = takeMoney;
  /*bills[i].onmousedown = function (event) {
    takeMoney(event);
  }*/
}

function takeMoney(event) {
  event.preventDefault();
  let bill = event.target;

  bill.style.position = "absolute";
  bill.style.transform = "rotate(90deg)";
  bill.style.margin = 0;
  
  let billCoords = bill.getBoundingClientRect();
  let billWidth = billCoords.width;
  let billHeight = billCoords.height; //console.log(event.clientX, event.clientY);
  
  bill.style.top = event.clientY - billWidth/2 + "px";
  bill.style.left = event.clientX - billHeight/2 + "px";
  
  window.onmousemove = function(event) {
    bill.style.top = event.clientY - billWidth/2 + "px";
    bill.style.left = event.clientX - billHeight/2 + "px";
  }
  
  bill.onmouseup = function() {
    window.onmousemove = null;
    if ( inAtm(bill) ) {
     let billCost = +bill.getAttribute("cost");
     balanceInput.value = +balanceInput.value + billCost;
     bill.remove();
    }
  }
  
}

function inAtm(bill) {
  let atm = document.querySelector('.atm img');
  
  let atmCoords = atm.getBoundingClientRect();
  let billCoords = bill.getBoundingClientRect();
  
  let billLeftTopCorner = {"x" : billCoords.x, "y": billCoords.y};
  let billRightTopCorner = {"x" : billCoords.x + billCoords.width, "y" : billCoords.y};
  
  let atmLeftTopCorner = {"x" :  atmCoords.x, "y" : atmCoords.y};
  let atmRightTopCorner = {"x" :  atmCoords.x + atmCoords.width, "y" : atmCoords.y};
  let atmLeftBottomTopCorner = {"x" :  atmCoords.x, "y" : atmCoords.y + atmCoords.height/3};
  
  if (billLeftTopCorner.x > atmLeftTopCorner.x
    && billRightTopCorner.x < atmRightTopCorner.x
    && billLeftTopCorner.y > atmLeftTopCorner.y
    && billLeftTopCorner.y < atmLeftBottomTopCorner.y
  ) {
    return true;
  } else {
    return false;
  }
  
}

//Сдача

let changeButton = document.querySelector(".change-btn"); 
/*changeButton.onclick = function () {
  takeChange(); - то же самое, что ниже
}*/
changeButton.onclick = takeChange;

function takeChange() {
  tossCoin("10");  
}

function tossCoin(cost) {
  let changeBox = document.querySelector(".change-box");
  changeBox.style.position = "relative";
  
  let changeBoxCoords = changeBox.getBoundingClientRect();
  let randomWidth = getRandomInt(0, changeBoxCoords.width - 50);
  let randomHeight = getRandomInt(0, changeBoxCoords.height - 50);

  let coin = document.createElement("img");
  coin.setAttribute('src', 'img/10rub.png');
  coin.style.width = '50px';
  coin.style.height = '50px';
  coin.style.position = 'absolute';
  coin.style.top = randomHeight + "px";
  coin.style.left = randomWidth + "px";
  changeBox.append(coin); //добавляем в конец
  //changeBox.prepend(coin); //в начало
  //changeBox.before(coin); //перед элементом
  //changeBox.after(coin); //после элемента
  //changeBox.replaceWith(coin); // заменяет элемент
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}











