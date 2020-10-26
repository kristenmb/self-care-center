var welcomePage = document.querySelector('.welcome-page');
var loginInput = document.querySelector('.name');
var loginButton = document.querySelector('.enter');
var userNameError = document.querySelector('.error-message')

var mainPage = document.querySelector('.main-page');
var pageTitle = document.querySelector('.personalized-welcome');
var briefWelcome = document.querySelector('.short-welcome');
var affirmationRadioButton = document.querySelector('#aff');
var mantraRadioButton = document.querySelector('#man');
var generateButton = document.querySelector('#generate-button');
var meditateImage = document.querySelector('img');
var messageDisplay = document.querySelector('#chosen-message');
var messageChoiceError = document.querySelector('.choice-error');

var viewAllButton = document.querySelector('#see-all');
var favoriteButton = document.querySelector('#favorite-item');
var clearMessage = document.querySelector('#clear-message');
var buttonDisplay = document.querySelector('.button-display');

var allMessagesPage = document.querySelector('.all-messages')
var allMantras = document.querySelector('#all-mans');
var allAffirmations = document.querySelector('#all-affs');
var allFavorties = document.querySelector('#all-favs');
var newAffirmationInput = document.querySelector('#new-aff');
var addAffrimationButton = document.querySelector('#add-aff');
var newMantraInput = document.querySelector('#new-mantra');
var addMantraButton = document.querySelector('#add-man');
var backToMainButton = document.querySelector('#back-to-main');

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

loginButton.addEventListener('click', openMainPage);
generateButton.addEventListener('click', chooseTypeOfSaying);
viewAllButton.addEventListener('click', openAllMessages);
favoriteButton.addEventListener('click', addToFavorites);
clearMessage.addEventListener('click', resetMessageDisplay);
addAffrimationButton.addEventListener('click', addNewAffirmation);
addMantraButton.addEventListener('click', addNewMantra);
backToMainButton.addEventListener('click', backToMain);

function openMainPage() {
  var userName = loginInput.value;
  if(userName === "") {
    userNameError.innerText = "Please enter your name";
  } else {
  mainPage.classList.remove("hidden");
  welcomePage.classList.add("hidden");
  personalizeWelcome(userName);
  }
}

function personalizeWelcome(userName) {
  pageTitle.innerHTML = `✨ ${userName}'s Self Care Center ✨`;
  briefWelcome.innerHTML = `Welcome, ${userName}. <br> Stay a while.`
}

function chooseTypeOfSaying() {
  if(affirmationRadioButton.checked) {
    chooseAffirmation();
  } else if(mantraRadioButton.checked) {
    chooseMantra();
  } else {
    messageChoiceError.innerText = "Please select a type of message."
  }
}

function generateRandomArrayIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function chooseAffirmation() {
  var randomAffirmation = affirmations[generateRandomArrayIndex(affirmations)];
  messageChoiceError.innerText = "";
  displayText(randomAffirmation);
}

function chooseMantra() {
 var randomMantra = mantras[generateRandomArrayIndex(mantras)];
 messageChoiceError.innerText = "";
 displayText(randomMantra);
 }

function displayText(typeOfSaying) {
  meditateImage.classList.add("hidden");
  messageDisplay.classList.remove("hidden");
  buttonDisplay.classList.remove("hidden");
  messageDisplay.innerText = typeOfSaying;
}

function resetMessageDisplay() {
  buttonDisplay.classList.add("hidden");
  meditateImage.classList.remove("hidden");
  messageDisplay.classList.add("hidden");
}

function addToFavorites() {
  if(!favorites.includes(messageDisplay.innerText)) {
    favorites.unshift(messageDisplay.innerText);
  }
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
        <p class="edit-affs">${affirmations[i]}</p>
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
  if(newAff === '' || affirmations.includes(newAff)) {
    newAffirmationInput.placeholder = 'Please add a new affirmation'
  } else {
  affirmations.push(newAff);
  displayAllMessages();
  }
}

function addNewMantra() {
  var newMan = newMantraInput.value;
  if(newMan === '' || mantras.includes(newMan)) {
    newMantraInput.placeholder = 'Please add a new mantra'
  } else {
  mantras.push(newMan);
  displayAllMessages();
  }
}

function backToMain() {
  mainPage.classList.remove("hidden");
  allMessagesPage.classList.add("hidden");
}

// EDIT/DELETE MESSAGES - brainstorm
// event bubbling -- target articles with column class in DOM, if affirmations[i] = selected saying, open new page with input feild - placeholder set as the selected saying, "update" button saves the new input in place of the old selected saying and repopulates in the All messages page, closing the editor.
