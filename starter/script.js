'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'That is correct!!😆';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 14;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //No Input yet
  if (!guess) {
    // document.querySelector('.message').textContent = 'Please put a number 🙄';
    displayMessage('Please put a number 🙄');
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'That is correct!!😆';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When number is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 😚' : 'Too Low! 😚');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'GAME OVER! 😫';
      displayMessage('GAME OVER! 😫');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too high! 😚';
//   score--;
//   document.querySelector('.score').textContent = score;
// } else {
//   document.querySelector('.message').textContent = 'GAME OVER! 😫';
//   document.querySelector('.score').textContent = 0;
// }

//   //Number too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low! 😚';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'GAME OVER! 😫';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});
