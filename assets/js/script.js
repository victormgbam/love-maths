//wait for DOM to finish loading before running the game//
//get the button and the eventlistener to them//

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
           alert("You clicked submit!");
        }else {
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
        }
    })
  }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function dispalySubtractQuestion() {

}

function dispalyMultiplyQuestion() {

}