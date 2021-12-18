const countdownDisplay = document.getElementById("countdown-display")
const countdownHoursDisplay = document.getElementById("countdown-time-display")

setInterval(renderCountdown, 1000)

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.

    let tDay = new Date().getDate()
    let remainingDays = (christmas - tDay)

    let tHours = new Date().getHours()
    let tMins = new Date().getMinutes()
    let tSecs = new Date().getSeconds()

    let remainingHours = (23 - tHours)
    let remainingMins = (59 - tMins)
    let remainingSecs = (59  - tSecs)
    
    if (remainingSecs < 10){
        remainingSecs = "0" + remainingSecs
    }
    if (remainingMins < 10){
        remainingMins = "0" + remainingMins
    }
    if (remainingHours < 10){
        remainingHours = "0" + remainingHours
    }

    let timer = remainingDays - 1 + " days " + remainingHours + " h " + remainingMins + " min " + remainingSecs + " s "


    return countdownDisplay.textContent = remainingDays,
countdownHoursDisplay.textContent = timer
}



renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.