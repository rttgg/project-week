// This file will hold logic for the worldHub HTLM page such as
//  Event listeners, form logic, ect...

// TODO: Create a listener for clicking on element that will begin combat.

// TODO: Create a listener for clicking on element that will rest hero.

// TODO: Create a function that displays hero data. (HTML Structure required)


// BUTTON TO START BATTLE

// Get the element of the battle button
var battleBtnEl = document.getElementById('start-battle');

// Go to the combat pate
battleBtnEl.addEventListener('click', function(){
  window.location.href = 'combatArena.html';
});
