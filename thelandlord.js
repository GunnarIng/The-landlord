window.addEventListener("DOMContentLoaded", main);

function main() {
  addEventListeners();
}

function pressStart() {
  const startMusic = document.getElementById("start-music");
  const pressStartText = document.getElementById("press");
  const showstartScreen = document.getElementById("startScreen");
  showstartScreen.classList.toggle("hidden");
  pressStartText.classList.toggle("hidden");
  // startMusic.autoplay = true;
  startMusic.volume = 0.2;
  startMusic.load();

  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  story.textContent =
    "Welcome to the LandLord Game. In this story you have to make the right choices to avoid getting evicted by the landlord. You will have 2 diffrent options when asked, make the right choices.";
  whatWillYouDo.textContent = "Lets go!!";

  button1.textContent = "Rock on!";
  button1.addEventListener("click", theStart);

  button2.classList.toggle("hidden");
}

function theStart() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  button2.classList.toggle("hidden");

  story.textContent =
    'You wake up on the floor with a bad hangover. Suddenly you hear someone banging on your door and shouting "I know you are in there, open up!".';
  whatWillYouDo.textContent = " 'startscen'  You have 2 options, what will you do?";

  button2.textContent = "Hide under the bed";
  button1.textContent = "Open the door";

  button1.addEventListener("click", openDoorScenario);
  button2.addEventListener("click", hideUnderBedScenarioPt1);
}

function openDoorScenario() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  button2.classList.toggle("hidden");

  story.textContent =
    "You open the dooor and there stands Pearl with her arms across and looking really mean. She yells at you and says that she wants her money for the rent NOW bitch!! She's intimidating, you get scared and sad over her approach.   ";
  whatWillYouDo.textContent = "Ok, Pearl is 3ft tall and weighs like 20lbs,  ";

  button1.textContent = "Ask her why shes so mean?";
  button2.textContent = "Tell her that you gonna pay, you just need a few days";

  button1.addEventListener("click", openDoorScenario);
  button2.addEventListener("click");
}

function openDoorScenarioPt2() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");
}

// Hide function will either lead to game over ocr continue the story
function hideUnderBedScenarioPt1() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  story.textContent = "shes just keeping banging on your door. ";
  whatWillYouDo.textContent = "'hideunderscen'  what what choice do you have?";

  button1.textContent = "Get drunk and tell her to get lost!!";
  button2.textContent = "Ok, i'll open the door";

  button1.addEventListener("click", gameOverScenario);

  button2.addEventListener("click", openDoorScenario);
  if (button2.classList.contains("hidden")) {
    button2.classList.toggle("hidden").true = false;
  }
}

// This will restart the game and tell you that you lost

function gameOverScenario() {
  const startMusic = document.getElementById("start-music");
  const gameOverMusic = document.getElementById("game-over-music");
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  button2.classList.toggle("hidden");

  startMusic.pause();
  gameOverMusic.autoplay = true;
  gameOverMusic.volume = 0.8;
  gameOverMusic.load();

  story.textContent =
    "Pearl was so mad that she called the police and you got arrested for not paying the rent. ";
  whatWillYouDo.textContent = "YOU GOT EVICTED!";

  button1.textContent = "Restart";

  button1.addEventListener("click", function () {
    location.reload();
  });
}

// document.body.innerHTML = ".....";
// cons button3 = document.createElement("button")

// *above we create and add a button to the DOM
