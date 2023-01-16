// Dice 1

var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var RandomDiceImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", RandomDiceImageSource1);

// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var RandomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", RandomDiceImageSource2);

// Choosing the winner

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "⛳Player1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "⛳Player2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
