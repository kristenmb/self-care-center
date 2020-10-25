var mainPage = document.querySelector('.main-page');
var affirmationRadioButton = document.querySelector('#aff');
var mantraRadioButton = document.querySelector('#man');
var generateButton = document.querySelector('#generate-button');
var meditateImage = document.querySelector('img');
var message = document.querySelector('#chosen-message');
var pageTitle = document.querySelector('.personalized-welcome');
var briefWelcome = document.querySelector('.short-welcome')

var viewAllButton = document.querySelector('#see-all');
var favoriteButton = document.querySelector('#favorite-item');

var welcomePage = document.querySelector('.welcome-page');
var loginInput = document.querySelector('.name');
var loginButton = document.querySelector('.enter');

var allMessagesPage = document.querySelector('.all-messages')
var allMantras = document.querySelector('#all-mans');
var allAffirmations = document.querySelector('#all-affs');
var allFavorties = document.querySelector('#all-favs');
var newAffirmationInput = document.querySelector('#new-aff');
var addAffrimationButton = document.querySelector('#add-aff');
var newMantraInput = document.querySelector('#new-mantra');
var addMantraButton = document.querySelector('#add-man');
var backToMainButton = document.querySelector('#back-to-main');
var editButton = document.querySelector('#edit-delete');

var mantras = [
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

var favorites = [];

generateButton.addEventListener('click', chooseTypeOfSaying);
loginButton.addEventListener('click', openMainPage);
viewAllButton.addEventListener('click', openAllMessages);
favoriteButton.addEventListener('click', addToFavorites);
addAffrimationButton.addEventListener('click', addNewAffirmation);
addMantraButton.addEventListener('click', addNewMantra);
backToMainButton.addEventListener('click', backToMain);


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
  viewAllButton.classList.remove("hidden");
  favoriteButton.classList.remove("hidden");
  message.innerText = typeOfSaying;
}

function addToFavorites() {
  if(!favorites.includes(message.innerText)) {
    favorites.unshift(message.innerText);
  }
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

function openAllMessages() {
  mainPage.classList.add("hidden");
  allMessagesPage.classList.remove("hidden");
  displayAllMessages();
}

function displayAllMessages() {
  allAffirmations.innerHTML = '<h3 class="all-page-headers">Affirmations</h3>';
  allMantras.innerHTML = '<h3 class="all-page-headers">Mantras</h3>';
  allFavorties.innerHTML = '<h3 class="all-page-headers">Favorites</h3>';
  displayAllAffirmations();
  displayAllMantras();
  displayAllFavorites();
}


function displayAllAffirmations() {
  for(var i = 0; i < affirmations.length; i++) {
    allAffirmations.innerHTML += `
      <div class="all-paras">
        <p>${affirmations[i]}</p>
      </div>`
  };
}

function displayAllMantras() {
  for(var i = 0; i < mantras.length; i++) {
    allMantras.innerHTML += `
      <div class="all-paras">
        <p>${mantras[i]}</p>
      </div>`
  };
}

function displayAllFavorites() {
  for(var i = 0; i < favorites.length; i++) {
    allFavorties.innerHTML += `
      <div class="all-paras">
        <p>${favorites[i]}</p>
      </div>`
  };
};

function addNewAffirmation() {
  var newAff = newAffirmationInput.value;
  affirmations.push(newAff);
  displayAllMessages();
}

function addNewMantra() {
  var newMan = newMantraInput.value;
  mantras.push(newMan);
  displayAllMessages();
}

function backToMain() {
  mainPage.classList.remove("hidden");
  allMessagesPage.classList.add("hidden");
}

function openMessageEditor() {

}
//FAVORITING
// star button
// add whatever mantra is displayed to a favorites array
// fill favorites column on all messages page

// EDITING messages
// edit button opens a modal pop up with a form and save button
// also a nevermind button
// form input saved in place of old saying.
