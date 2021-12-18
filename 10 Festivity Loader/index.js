const meter = document.getElementById("meter")

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

function timer(){
    let tday = new Date().getDate();
    meter.setAttribute("low", "6")
    meter.setAttribute("high", "20")
    meter.setAttribute("optimum", "12")
    
    meter.setAttribute("value", tday)
    
    return;
}
timer()

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
