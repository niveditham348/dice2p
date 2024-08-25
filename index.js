var randomNumber1 = Math.floor(Math.random() *6)+1; //images/dice1.png - images/dice6.png


var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
//dice1.png - dice6.png

 //images/dice1.png - images/dice6.png





var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



  if (randomNumber1===5){
    document.querySelector("h1").innerHTML = "player 1 wins! 🎉";
  }
  else if(randomNumber2===6){
    document.querySelector("h1").innerHTML = "player 2 Wins!🎉";
  }
  else{
    document.querySelector("h1").innerHTML = "no one Wins!"
  }
    