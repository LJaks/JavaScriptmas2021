const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")

btn.addEventListener("click", fix);

const newYearDay = 31;
let tDay = new Date().getDate();
let remainingDays = newYearDay - tDay;

console.log(remainingDays)

if (remainingDays === 0) newYear();

  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
function fix() {
  let text = "Merry Christmas! 🎄";
  
  greeting.textContent = text;
  greeting.classList.add("fix");
  return;
}

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.

function newYear() {
  
  const text = "Happy New Year!";
  
  greeting.textContent = text;
  greeting.classList.add("fix");
  btn.style.display = "none"
  return;
}

