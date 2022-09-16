//var namep1 = prompt("Enter Player1 Name");


var randomNumber1 = Math.floor(Math.random()*6)+1;
var Imagechange1 = "images/dice"+randomNumber1+".png";
var imag1 = document.querySelectorAll("img")[0];
imag1.setAttribute("src",Imagechange1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var Imagechange2 = "images/dice"+randomNumber2+".png";
var imag2 = document.querySelectorAll("img")[1];
imag2.setAttribute("src",Imagechange2);

var headLine = [0];

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player2wins🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩Player1wins!";
}
