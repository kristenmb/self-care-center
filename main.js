var affirmationRadioButton = document.querySelector('#aff');
var mantraRadioButton = document.querySelector('#man');
var generateButton = document.querySelector('#generate-button');
var meditateImage = document.querySelector('img');
var message = document.querySelector('#chosen-message');

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

function generateRandomArrayIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function chooseTypeOfSaying() {
  //if aff radio button call choose aff function
  if(affirmationRadioButton.value) {
    chooseAffirmation();
  } else if(mantraRadioButton.value) {
    chooseMantra();
  }
  //if mantra radio button call choose man function
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
  // input the typeOfSaying parameter into the inner HTML of the second div
  // hide the image
}
