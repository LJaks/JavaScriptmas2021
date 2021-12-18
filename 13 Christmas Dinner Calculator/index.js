const btn = document.getElementById("btn");
let food = document.getElementById("food");

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

const numbGuests = document.getElementById("num-input");
const vegetarian = document.getElementById("vegetarian-input");

btn.addEventListener("click", function () {
	console.log(vegetarian.checked);
	if (vegetarian.checked && numbGuests.value == "") {
		food.innerText = "nut roast";
	}
	if (numbGuests.value > 0 && numbGuests.value <= 4) {
		food.innerText = "turkey";
		numbGuests.value = "";
		numbGuests.placeholder = "";
		if (vegetarian.checked) {
			food.innerText = "turkey and num roast";
		}
	} else if (numbGuests.value > 4) {
		food.innerText = "goose";
		numbGuests.value = "";
		numbGuests.placeholder = "";
		if (vegetarian.checked) {
			food.innerText = "goose and num roast";
		}
	} else if (vegetarian.checked === false && numbGuests.value <= 0) {
		numbGuests.value = "";
		food.innerText = "...";
		numbGuests.placeholder = "try again...";
	}
});

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
