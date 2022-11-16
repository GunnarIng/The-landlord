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
  startMusic.autoplay = true;
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

  button2.textContent = "Hide under the bed";
  button1.textContent = "Open the door";

  story.textContent =
    'You wake up on the floor with a bad hangover. Suddenly you hear someone banging on your door and shouting "I know you are in there, open up!".';

  whatWillYouDo.textContent = "You have 2 options, what will you do?";

  button1.addEventListener("click", openDoorScenario);
  button2.addEventListener("click", hideUnderBedScenarioPt1);
}

function openDoorScenario() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");
  button2.classList.toggle("hidden");
  button2.textContent = "Tell her that you gonna pay, you just need a few days";
  button1.textContent = "Smack the door in her face, and tell her You're the boss!";

  story.textContent =
    "You open the dooor and there stands Pearl with her arms across and looking really mean. You get scared and sad at the same time cause you know that she will evict you if you dont pay up for the rent thats overdue.  ";

  whatWillYouDo.textContent =
    "ok, Pearl is 4ft tall and weighs like 20lbs. What could she do? Time to tell her whos the boss around here? ";

  button1.addEventListener("click", openDoorScenario);
  button2.addEventListener("click") ;
}

function hideUnderBedScenarioPt1() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  button2.classList.toggle("hidden");
  button1.textContent = "Get drunk and fall asleep";

  story.textContent = "shes just keeping banging on your door. ";
  whatWillYouDo.textContent = "what what choice do you have?";

  button1.addEventListener("click", gameOverScenario);
  
  

}





function gameOverScenario() {
  const startMusic = document.getElementById("start-music");
  const gameOverMusic = document.getElementById("game-over-music");
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");
  
  startMusic.pause();

  gameOverMusic.autoplay = true;
  gameOverMusic.volume = 0.6;
  gameOverMusic.load();

 
  story.textContent = "";
  whatWillYouDo.textContent = "GAME OVER MAN";
  button1.textContent = "Restart";
  
  button1.addEventListener("click", function () {
    location.reload();
  });

}

// document.body.innerHTML = ".....";
// cons button3 = document.createElement("button")

// *above we create and add a button to the DOM
