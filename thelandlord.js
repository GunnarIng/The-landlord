window.addEventListener("DOMContentLoaded", main);

let userName;

function main() {
  addEventListeners();
}

function pressStart() {
  const startMusic = document.getElementById("start-music");
  const pressStartText = document.getElementById("press");
  const showstartScreen = document.getElementById("startScreen");
  showstartScreen.classList.toggle("hidden");
  pressStartText.classList.toggle("hidden");
//   startMusic.autoplay = true;
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
  button2.addEventListener("click", hideUnderBedScenario);
}



function openDoorScenario() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  button2.textContent = "woppsi";
  button1.textContent = "smack the door in her face";

  story.textContent =
    "The banging are getting louder and i'm thinking that maybe someone needs help. I rushed and opended it, there she was. My godamn landlord Pearl, an shes pissed off!  You are overde with your rent by 15 days! YOU PAY NOW!! Bitch!  ";

  whatWillYouDo.textContent =
    "ok, Pearl is 4ft tall and weighs like 20lbs. I'm scared of her but maybe this time I can fight back? ";

  button1.addEventListener("click", openDoorScenario);
  button2.addEventListener("click", );
}

function hideUnderBedScenario() {
    const story = document.getElementById("story-text");
    const whatWillYouDo = document.getElementById("description");
    const button1 = document.getElementById("opt-1");
    const button2 = document.getElementById("opt-2");
     
   
    button1.textContent = "Get drunk and fall asleep";
  
    story.textContent =
      "shes just keeping banging on your door. ";
  
    whatWillYouDo.textContent =
      "what what choice do you have";
  
    button1.addEventListener("click", openDoorScenario);
    button2.addEventListener("click", );
}

// document.body.innerHTML = ".....";
// cons button3 = document.createElement("button")

// *above we create and add a button to the DOM


