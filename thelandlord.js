window.addEventListener("DOMContentLoaded", main);

let userName;


function main() {
    addEventListeners();
}


function pressStart (){
    const pressStart = document.getElementById("press")
    const header = document.getElementById("header")
    header.classList.toggle("hidden")
    pressStart.classList.toggle("hidden")
}



//  Function that will save your name in a varible that will be used during the game-story




// afterwards you will start the story with a new page with new