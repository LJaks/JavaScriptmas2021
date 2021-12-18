const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

const arrLenght = greetings.length;
let prevNumb = 0;
let numb = 0;

function writeGreeting(){
    while (prevNumb === numb) {
        numb = Math.floor(Math.random() * arrLenght);
    }
    prevNumb = numb
    return greetingDisplay.textContent = greetings[numb];
}


// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.