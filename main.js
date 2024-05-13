//Range slider for people (table reservation)
const value = document.querySelector("#value");
const input = document.querySelector("#people-input");
//const people = document.getElementById("#people");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  // console.log("Tuka stignav!");
  value.textContent = event.target.value;
  //console.log("value");
});

//Date restriction
var today = new Date();
var formattedDate = today.toISOString().split("T")[0];
document.getElementById("textDate").min = formattedDate;
console.log(formattedDate);
console.log(textDate);
console.log(today.toLocaleDateString);
//alert("Your date is wrong, try again!");
