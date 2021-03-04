// NEEDED VARIABLES
let first_card = document.querySelector(".first_card");
let first_pop = document.querySelector(".first");

let second_card = document.querySelector(".second_card");
let second_pop = document.querySelector(".second");

let third_card = document.querySelector(".third_card");
let third_pop = document.querySelector(".third");

let fourth_card = document.querySelector(".fourth_card");
let fourth_pop = document.querySelector(".fourth");

let fifth_card = document.querySelector(".fifth_card");
let fifth_pop = document.querySelector(".fifth");

console.log(first_card, second_card, third_card, fourth_card, fifth_card);


// EVENT LISTENERS
first_card.addEventListener('mouseover', showFirstPop);
first_card.addEventListener('mouseout', hideFirstPop);

second_card.addEventListener('mouseover', showSecPop);
second_card.addEventListener('mouseout', hideSecPop);

third_card.addEventListener('mouseover', showThirdPop);
third_card.addEventListener('mouseout', hideThirdPop);

fourth_card.addEventListener('mouseover', showFourthPop);
fourth_card.addEventListener('mouseout', hideFourthPop);

fifth_card.addEventListener('mouseover', showFifthPop);
fifth_card.addEventListener('mouseout', hideFifthPop);

// CALLBACK FUNCTIONS
function showFirstPop() {
  first_pop.style.display = "block";
}

function hideFirstPop() {
  first_pop.style.display = "none";
}

function showSecPop() {
  second_pop.style.display = "block";
}

function hideSecPop() {
  second_pop.style.display = "none";
}

function showThirdPop() {
  third_pop.style.display = "block";
}

function hideThirdPop() {
  third_pop.style.display = "none";
}

function showFourthPop() {
  fourth_pop.style.display = "block";
}

function hideFourthPop() {
  fourth_pop.style.display = "none";
}

function showFifthPop() {
  fifth_pop.style.display = "block";
}

function hideFifthPop() {
  fifth_pop.style.display = "none";
}