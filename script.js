"use strict"

//window.document.documentElement.body = document
//поиск элементов
// --------------------устаревшие методы-------------------------------------------
/*let coffeeMachine = document.getElementById("coffee"); //поиск по ID
console.log(coffeeMachine);
let images = document.getElementsByTagName("img"); //поиск по тэгу
console.log(images);
let coffeeItems = document.getElementsByClassName("coffee-item"); //поиск по классу
console.log(coffeeItems);
let firstImage = coffeeItems[0].getElementsByTagName("img");
console.log(firstImage[0]);*/
//----------------------------------------------------------------------------------
//--------------------современные методы--------------------------------------------
/*let coffeeMachine = document.querySelector("#coffee");
console.log(coffeeMachine);
let image = document.querySelector("img"); //если селекторов несколько , то выдаст только первый
console.log(image);
let coffeeItems = document.querySelectorAll(".coffee-item");
console.log(coffeeItems);
let itemImages = document.querySelectorAll(".coffee-item img");
console.log(itemImages);
let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img");
console.log(cupImages);*/
//-----------------------------------------------------------------------------------
//-------------------работа с элементами---------------------------------------------
//изменение css свойств
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "10px solid darkblue";
coffeeMachine.style.borderRadius = "25px";// еслии css свойство состоит из 2ух слов, то надо писать верблюжью.нотацию сamel.Case
coffeeMachine.style.position = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";
let coffeeMachineTop = coffeeMachine.style.top;
console.log( parseInt(coffeeMachineTop) );*/
//изменение атрибутов
/*let balance = document.querySelector("input[type='text']");
/*let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute("type", "date");

console.log( balance.hasAttribute("placeholder") );
balance.removeAttribute("aria-label");*/
/*balance.value = 500; //== balance.getAttribute('value',500)
console.log(balance.value); // ==balance.getAttribute('value'); все это можно применить только к уже существующим атрибутам*/
//изменение классов
/*let changeButton = document.querySelector(".btn");
console.log(changeButton.classList);
changeButton.classList.remove("btn-primary");
changeButton.classList.add("btn-success");*/
//changeButton.classList.toggle("") //вкл/вкл


//изменение содержимого элементов
/*let displayText = document.querySelector(".display-text");
console.log( displayText.innerHTML );
console.log( displayText.innerText );
//.innerHTML = "<b>Готовим кофе</b>";
displayText.innerText = "<b>Готовим кофе</b>";*/

//события и слушатели событий

//Мышь - click mouserover mousedown mousemove
//для input - focus chamge
//this возвращает обьект к которому обращено свойство или обращен метод

//<div class = "coffee-item" onclick="buyCoffee('Американо',50, this)">

// тоже самое что:
/*let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function () {
  buyCoffee('Капучино', 50, this);
} 
*/
//----------------Планирование-------------------------

//таймаут


/*
setTimeout(function () {
 alert("таймаут отработал");
}, 5000);*/


/*setTimeout(paintBody, 5000, 'paleturquoise');
let changeButton = document.querySelector(".btn");
/*
setTimeout(function () {
 paintBody();
}, 5000); или:

let timeout = setTimeout(paintBody, 5000, 'paleturquoise');

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(timeout);
}

function paintBody(color) {
  document.body.style.background = color;
} */



/*setInterval(trashConsole, 1000);

function trashConsole() {
  console.log(Math.random());
 
}  - запустили консоль*/ 
/*let interval = setInterval(trashConsole, 1000);

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(interval);
}

function trashConsole() {
  console.log(Math.random()); //остановили действие в консоли с помощью кнопки
} */












