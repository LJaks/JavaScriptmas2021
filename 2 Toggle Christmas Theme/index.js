const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
const christmasy = greeting.textContent

snowBtn.addEventListener("click", function(){
    let snowy = "Let it snow!";
    greeting.textContent = snowy;
    body.classList.add("body-snow")
    
    })
    
christmasBtn.addEventListener("click", function(){
    greeting.textContent = christmasy
    body.classList.remove("body-snow")
    })

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.