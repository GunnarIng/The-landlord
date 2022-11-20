window.addEventListener("DOMContentLoaded", main);

let beer = false;
let whiskey = false;

function main() {
  // runTheGame();
  youWon();
}

function runTheGame() {
  const h1 = document.getElementById("h1");
  h1.onclick = pressStart;
}

/** */
function pressStart() {
  const startMusic = document.getElementById("start-music");
  const pressStartText = document.getElementById("press");
  const showstartScreen = document.getElementById("startScreen");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");

  showstartScreen.classList.toggle("hidden");
  pressStartText.classList.toggle("hidden");

  startMusic.autoplay = true;
  startMusic.volume = 0.2;
  startMusic.load();

  story.textContent =
    "Welcome to the LandLord Game. In this story you have to make  the right choices to avoid getting evicted by the landlord. You will have 2 diffrent options when asked, make the right choices.";
  whatWillYouDo.textContent = "Lets go!!";

  button1.textContent = "Rock on!";
  button1.onclick = theStart;

  button2.classList.add("hidden");
}

function theStart() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  button2.classList.remove("hidden");

  story.textContent =
    'You wake up on the floor with a bad hangover. Suddenly you hear someone banging on your door and shouting "I know you are in there, open up!".';
  whatWillYouDo.textContent =
    "Every movement makes my head feels like it will explode any second....maybe this is just a nightmare";

  button1.onclick = openDoorScenario;
  button1.textContent = "Open the door";

  button2.onclick = hideUnderBedScenario;
  button2.textContent = "You get paranoind and hide under the bed";
}

// ---------------- Scenario Open the Door ----------------------

function openDoorScenario() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  button2.classList.remove("hidden");

  story.textContent =
    "You open the dooor and there stands Pearl with her arms across and seems really angry. She yells at you and says that she wants her money for the rent NOW bitch!! She's intimidating, you feel intimidated by her aggresive behavior.   ";
  whatWillYouDo.textContent =
    "Ok, Pearl is 3ft tall and weighs like 20lbs, but you're scared of her. what to do?  ";

  button1.textContent = "Ask her why shes so mean?";
  button1.onclick = openDoorScenarioPt2;

  button2.textContent = "Tell her that you gonna pay, you just need a few more days";
  button2.onclick = tallkYourWayOut;
}
//
//
//
// ------------------ Scenario: Open the door Pt2 ------------------
//
function openDoorScenarioPt2() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  story.textContent =
    "Pearl says that she needs her money for drinks!. You ask her if shes drunk? She mumbeling something about beer, whiskey and money. You tell her that shes an alcoholic. She gets mad and says that she will call the police. ";
  whatWillYouDo.textContent = "Damn, you've gotta calm her down. What will you do?";

  button1.textContent = "Head back inside and see what you can give her to calm her down";
  button1.onclick = getInsideScenario;

  button2.textContent =
    "You explain that you work 3 jobs and time are scarce cause your dog just died. You just dont have the money right now.";
  button2.onclick = gameOverScenario;
}

// ------------------ Scenario: talk you way out ------------------
function tallkYourWayOut() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  story.textContent =
    "Pearl reminds you that you are 15 days late with the pay. Ypu tell her that you've gotten unforseen expanses cause your dog had to be put down by the vet. She shows no compassion and say that she will smack me if I don't pay her. ";
  whatWillYouDo.textContent = "Damn, you've gotta calm her down. What will you do?";

  button1.textContent = "Head back inside and see what you can give her to calm her down";
  button1.onclick = getInsideScenario;

  button2.textContent =
    "You tell her that she can have your car, it's a bit rusty but it purrs like a cat.";
  button2.onclick = gameOverScenario;
}
//
// ------------------Scenario: get inside   these options leads to boolean functions ------------------------
function getInsideScenario() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  story.textContent =
    "You´re stressed out and want to find something for her to drink. The appertment looks like shit, like someone had a big 'fuck-Around-Party'!!";
  whatWillYouDo.textContent =
    "After a while, you find a half bottle of whiskey and a six pack of beers. You wont give her all cause you need something to cure your hangover later on";

  button1.textContent = "Pick up the whiskey";
  button1.onclick = whiskeyBottle;

  button2.textContent = "Pick up the the 6-pack";
  button2.onclick = beerCan;
}

// -------------------- Boolean functions ------------
function whiskeyBottle() {
  whiskey = true;
  giveSomethingToPearl();
}

function beerCan() {
  beer = true;
  giveSomethingToPearl();
}

// ---------------- Scenario: Give pearl item -----------------
function giveSomethingToPearl() {
  if (beer === true) {
    const story = document.getElementById("story-text");
    const whatWillYouDo = document.getElementById("description");
    const button1 = document.getElementById("opt-1");
    const button2 = document.getElementById("opt-2");

    story.textContent = "You better have something good for me or i´ll put you on the streets!";

    whatWillYouDo.textContent = "Shes being a bully. Is this ok? Shes a mean bitch.";

    button1.textContent = "Give beer to pearl and ask her to stop bothering you";
    button1.onclick = youWon;

    button2.textContent = "Throw the beer in her face!! And tell her to get the fuck off";
    button2.onclick = gameOverScenario;
  }

  if (whiskey === true) {
    const story = document.getElementById("story-text");
    const whatWillYouDo = document.getElementById("description");
    const button1 = document.getElementById("opt-1");
    const button2 = document.getElementById("opt-2");

    story.textContent = "You better have something good for me or i´ll put you on the streets!";

    whatWillYouDo.textContent = "Shes being a bully. Is this ok? Shes a mean bitch.";

    button1.textContent = "Give the half full whiskey bottle to her.";
    button1.onclick = gameOverScenario;

    button2.textContent = "Smash the whiskey bottle infront of her feet and laugh at her";
    button2.onclick = gameOverScenario;
  }
}

function youWon() {
  const showstartScreen = document.getElementById("startScreen");
const p = document.createElement("p")

p.textContent = "sadfsdf sdaf la;fksasl; kdl;asfk lsa;fk lakfqwlpo[kdcfsadfsdf sdaf la;fksasl; kdl;asfk lsa;fk lakfqwlpo[kdcfsadfsdf sdaf la;fksasl; kdl;asfk lsa;fk lakfqwlpo[kdcfsadfsdf sdaf la;fksasl; kdl;asfk lsa;fk lakfqwlpo[kdcf"
p.className = "theEnd"
document.body.textContent = ""
document.body.append(p)

}




//
//
//
// ------------------ Scenario: Hide under bed ------------------
// Hide function will either lead to game over ocr continue the story ----- Issue from here to open the door scenario.
function hideUnderBedScenario() {
  const story = document.getElementById("story-text");
  const whatWillYouDo = document.getElementById("description");
  const button1 = document.getElementById("opt-1");
  const button2 = document.getElementById("opt-2");

  story.textContent = "shes just keeping banging on your door. ";
  whatWillYouDo.textContent = "Shes persistent, what will you do?";

  button1.textContent = "Get drunk and tell her to get lost!!";
  button1.onclick = gameOverScenario;

  button2.textContent = "Ok, i'll open the door";
  button2.onclick = openDoorScenario;
}
//
//
//
//
//
//
//
// ------------------ Game over scenarios ------------------
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

  story.textContent = "Pearl just lost it and went to the police and you got evicted.";
  whatWillYouDo.textContent = "YOU GOT EVICTED!";
  whatWillYouDo.style.color = "red";

  button1.textContent = "Try again?";
  button1.onclick = restart;
}

function restart() {
  const startScreen = document.getElementById("startScreen");
  const press = document.getElementById("press");
  const gameOverMusic = document.getElementById("game-over-music");
  const whatWillYouDo = document.getElementById("description");

  startScreen.classList.add("hidden");
  press.classList.remove("hidden");

  whatWillYouDo.style.color = "white";

  gameOverMusic.pause();
}

// ------------------ You won scenario ------------------
