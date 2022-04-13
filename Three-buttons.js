function randomWinner(buttonNumber) {
  var randomValue = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
  if (randomValue == buttonNumber) {
  	alert("YOU WIN! CONGRATULATIONS!");
  } else {
  	alert("YOU LOSE! The winner button was " + randomValue + ". TRY AGAIN!");
  }
}
