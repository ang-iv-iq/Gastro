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
//console.log(formattedDate);
//console.log(textDate);
//console.log(today.toLocaleDateString);
//alert("Your date is wrong, try again!");

//Student Menues
const studentName = document.querySelectorAll(".student-name");
const studentMenu = document.querySelectorAll(".student-menu");

for (const [i, heading] of studentName.entries()) {
  studentName[i].addEventListener("click", (e) => {
    studentMenu.forEach((student) =>
      student.classList.remove("js-student-menu")
    );
    studentMenu[i].classList.add("js-student-menu");

    studentName.forEach((name) => name.classList.remove("js-student-name"));
    studentName[i].classList.add("js-student-name");

    //Checks if element contains class

    // if (studentMenu[i].classList.contains("js-student-menu")) {
    //   studentName[i].classList.add("js-student-name");
    // } else {
    //   studentName[i].classList.remove("js-student-name");
    // }
  });
}

//Checkbox Payment & Delivery
//Function Example
// function RadioBtn() {
//   const deliveryOptions = document.querySelector(".delivery-options-list");
//   const paymentOptions = document.querySelector(".payment-options");
//   const checkbox = document.querySelectorAll(".checkbox");
//   for (const [i, heading] of checkbox.entries()) {
//     checkbox[i].addEventListener("click", (e) => {
//       checkbox.forEach((checkbox) => checkbox.classList.remove("js-checkbox"));
//       checkbox[i].classList.add("js-checkbox");
//     });
//   }
// }

const checkboxList = document.querySelectorAll(".checkbox-list");
const deliveryOptionTitle = document.querySelectorAll(".delivery-option-title");

for (const [elena] of deliveryOptionTitle.entries()) {
  deliveryOptionTitle[elena].addEventListener("click", () => {
    // console.log(elena);
    deliveryOptionTitle[elena].classList.toggle("js-delivery-option-title");
    checkboxList[elena].classList.toggle("js-checkbox-list");
  });
}

//Burger Menu
const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const burgerMenuBtnClose = document.querySelector(".close-burger-menu-btn");
const nav = document.querySelector(".nav");
const body = document.querySelector(".body");
const overlay = document.querySelector(".overlay");

burgerMenuBtn.addEventListener("click", () => {
  nav.classList.add("js-burger-menu");
  overlay.classList.add("js-overlay");
  body.style.overflow = "hidden";
});

burgerMenuBtnClose.addEventListener("click", () => {
  nav.classList.remove("js-burger-menu");
  overlay.classList.remove("js-overlay");
  body.style.overflow = "auto";
});

overlay.addEventListener("click", () => {
  nav.classList.remove("js-burger-menu");
  overlay.classList.remove("js-overlay");
  body.style.overflow = "auto";
});

//Search Functionality
const inputSearch = document.querySelector(".search-input");
inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    window.open(`https://www.allrecipes.com/search?q=${inputSearch.value}`);

    //Open search results in the same tab

    // window.open(
    //   `https://www.allrecipes.com/search?q=${inputSearch.value}`,
    //   "_self"
    // );
  }
});

// Hide header on scroll
if (window.innerWidth < 768)
  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      document.querySelector(".header").classList.add("menu-scroll");
    } else {
      document.querySelector(".header").classList.remove("menu-scroll");
    }
  };
