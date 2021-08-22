
//bringing in all my elements from html
var timeDisplayEl = document.querySelector("#currentDay");
var row9EL = document.querySelector("#row9");
var plan9EL = document.querySelector("#plan9");
var save9EL = document.querySelector("#save9");

var row10EL = document.querySelector("#row10");
var plan10EL = document.querySelector("#plan10");
var save10EL = document.querySelector("#save10");

var row11EL = document.querySelector("#row11");
var plan11EL = document.querySelector("#plan11");
var save11EL = document.querySelector("#save11");

var row12EL = document.querySelector("#row12");
var plan12EL = document.querySelector("#plan12");
var save12EL = document.querySelector("#save12");

var row1EL = document.querySelector("#row1");
var plan1EL = document.querySelector("#plan1");
var save1EL = document.querySelector("#save1");

var row2EL = document.querySelector("#row2");
var plan2EL = document.querySelector("#plan2");
var save2EL = document.querySelector("#save2");

var row3EL = document.querySelector("#row3");
var plan3EL = document.querySelector("#plan3");
var save3EL = document.querySelector("#save3");

var row4EL = document.querySelector("#row4");
var plan4EL = document.querySelector("#plan4");
var save4EL = document.querySelector("#save4");

var row5EL = document.querySelector("#row5");
var plan5EL = document.querySelector("#plan5");
var save5EL = document.querySelector("#save5");


//small function to display the current day
function displayDay() {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
}
setInterval(displayDay, 1000);

//gets the current hour in 1-24 h format instead of 12pm to 12am format
var currentHour = moment().format("H");


//if else statements for each hour to determine the color
if (9 < currentHour) {
  row9EL.classList = "past";
} else if (9 == currentHour) {
  row9EL.classList = "present";
} else {
  row9EL.classList = "future";
}

if (10 < currentHour) {
  row10EL.classList = "past";
} else if (10 == currentHour) {
  row10EL.classList = "present";
} else {
  row10EL.classList = "future";
}

if (11 < currentHour) {
  row11EL.classList = "past";
} else if (11 == currentHour) {
  row11EL.classList = "present";
} else {
  row11EL.classList = "future";
}

if (12 < currentHour) {
  row12EL.classList = "past";
} else if (12 == currentHour) {
  row12EL.classList = "present";
} else {
  row12EL.classList = "future";
}

//to make it easier for myself, I have the check part in the 1-24h format as well
if (13 < currentHour) {
  row1EL.classList = "past";
} else if (13 == currentHour) {
  row1EL.classList = "present";
} else {
  row1EL.classList = "future";
}

if (14 < currentHour) {
  row2EL.classList = "past";
} else if (14 == currentHour) {
  row2EL.classList = "present";
} else {
  row2EL.classList = "future";
}

if (15 < currentHour) {
  row3EL.classList = "past";
} else if (15 == currentHour) {
  row3EL.classList = "present";
} else {
  row3EL.classList = "future";
}

if (16 < currentHour) {
  row4EL.classList = "past";
} else if (16 == currentHour) {
  row4EL.classList = "present";
} else {
  row4EL.classList = "future";
}

if (17 < currentHour) {
  row5EL.classList = "past";
} else if (17 == currentHour) {
  row5EL.classList = "present";
} else {
  row5EL.classList = "future";
}


//checks if there is anything in local storage, and if there is it'll populate the text box with it
if (plan9EL !== null) {
  plan9EL.value = localStorage.getItem("plan9AM");
}

if (plan10EL !== null) {
  plan10EL.value = localStorage.getItem("plan10AM");
}

if (plan11EL !== null) {
  plan11EL.value = localStorage.getItem("plan11AM");
}

if (plan12EL !== null) {
  plan12EL.value = localStorage.getItem("plan12PM");
}

if (plan1EL !== null) {
  plan1EL.value = localStorage.getItem("plan1PM");
}

if (plan2EL !== null) {
  plan2EL.value = localStorage.getItem("plan2PM");
}

if (plan3EL !== null) {
  plan3EL.value = localStorage.getItem("plan3PM");
}

if (plan4EL !== null) {
  plan4EL.value = localStorage.getItem("plan4PM");
}

if (plan5EL !== null) {
  plan5EL.value = localStorage.getItem("plan5PM");
}


// function to set the content of text box into local storage
function showResponse9(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan9AM", plan9EL.value);
}

function showResponse10(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan10AM", plan10EL.value);
}

function showResponse11(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan11AM", plan11EL.value);
}

function showResponse12(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan12PM", plan12EL.value);
}


function showResponse1(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan1PM", plan1EL.value);
}

function showResponse2(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan2PM", plan2EL.value);
}

function showResponse3(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan3PM", plan3EL.value);
}

function showResponse4(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan4PM", plan4EL.value);
}

function showResponse5(event) {
  // Prevent default action
  event.preventDefault();
  localStorage.setItem("plan5PM", plan5EL.value);
}

//Event listener listening for a click on the save button to trigger appropriate function from above
save9EL.addEventListener("click", showResponse9);

save10EL.addEventListener("click", showResponse10);

save11EL.addEventListener("click", showResponse11);

save12EL.addEventListener("click", showResponse12);

save1EL.addEventListener("click", showResponse1);

save2EL.addEventListener("click", showResponse2);

save3EL.addEventListener("click", showResponse3);

save4EL.addEventListener("click", showResponse4);

save5EL.addEventListener("click", showResponse5);