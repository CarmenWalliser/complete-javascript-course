'use strict';

//selecting elements
const player0El = document.querySelector('player--0');
const player1El = document.querySelector('player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnView = document.querySelector('.btn--view');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//current score
let currenScore = 0;
let activePlayer = 0; // active 0 and not active 1

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. generate random dice rol
  const dice = Math.trunc(Math.random() * 6) + 1; //give number between 0 and
  //  6
  console.log(dice);

  //2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. check if rolled and if true switch to next player
  if (dice !== 1) {
    //add dice to current score
    currenScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currenScore;
    // currentScore0El.textContent = currenScore; //will change later
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currenScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
