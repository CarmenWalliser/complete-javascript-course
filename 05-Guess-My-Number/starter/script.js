'use strict';
// //reading content
// console.log(document.querySelector('.message').textContent);
// //change content
// document.querySelector('.message').textContent = 'Correct Number !';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//get secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //when player win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !';
    //change background color in css
    document.querySelector('body').style.backgroundColor = '#60b347';
    //chnage font in css
    document.querySelector('.number').style.width = '30rem';

    //When guess is to high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Number to high !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(!';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is to low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Number to low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
