var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var titleElement = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    
    titleElement.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
 
    titleElement.innerHTML = "Player 2 Wins! 🚩";
} else {

    titleElement.innerHTML = "It's a Draw!";
}




