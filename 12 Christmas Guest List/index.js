const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

btn.addEventListener("click", function(){
    if (input.value === ""){
        return;
    }
    guests.push(input.value);
    getList();
    input.value = "";
});


function getList(){
    let guestItem = "<li>Me</li><li>Cat</li>";
    let rmButton = "<button>X</button>"

    for (let i = 0; i < guests.length; i++) {
         guestItem += `<li>${guests[i]}</li>`;
         guestList.innerHTML = guestItem;
    }
    
};
    

getList();

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


