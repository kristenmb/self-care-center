var mainPage = document.querySelector('.main-page');
var affirmationRadioButton = document.querySelector('#aff');
var mantraRadioButton = document.querySelector('#man');
var generateButton = document.querySelector('#generate-button');
var meditateImage = document.querySelector('img');
var message = document.querySelector('#chosen-message');
var pageTitle = document.querySelector('.personalized-welcome');
var briefWelcome = document.querySelector('.short-welcome')

var welcomePage = document.querySelector('.welcome-page');
var loginInput = document.querySelector('.name');
var loginButton = document.querySelector('.enter');

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];

generateButton.addEventListener('click', chooseTypeOfSaying);
loginButton.addEventListener('click', openMainPage);

function generateRandomArrayIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function chooseTypeOfSaying() {
  if(affirmationRadioButton.checked) {
    chooseAffirmation();
  } else if(mantraRadioButton.checked) {
    chooseMantra();
  }
  //else return error or alert "Please select a type of message."
}

function chooseMantra() {
 var randomMantra = mantras[generateRandomArrayIndex(mantras)];
 displayText(randomMantra);
 }
//pull randomMantra out of array to prevent duplicates
//if statement - if mantras is empty .....?

function chooseAffirmation() {
  var randomAffirmation = affirmations[generateRandomArrayIndex(affirmations)];
  displayText(randomAffirmation);
}

function displayText(typeOfSaying) {
  meditateImage.classList.add("hidden");
  message.classList.remove("hidden");
  message.innerText = typeOfSaying;
}

function openMainPage() {
  var userName = loginInput.value;
  mainPage.classList.remove("hidden");
  welcomePage.classList.add("hidden");
  personalizeWelcome(userName);
}

function personalizeWelcome(userName) {
  pageTitle.innerHTML = `✨ ${userName}'s Self Care Center ✨`;
  briefWelcome.innerHTML = `Welcome, ${userName}. <br> Stay a while.`
}

//button
//add whatever mantra is displayed to a favorites array
