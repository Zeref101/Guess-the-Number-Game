'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let high_score = 0;
let score = 20;

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        document.querySelector('.score').textContent = score;


        number = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').textContent = '?';

        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    });


document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        // NO GUESS
        if (!guess) {
            document.querySelector('.message').textContent = '🚫 No Number'

        }
        // WINS
        else if (guess === number) {
            document.querySelector('.message').textContent = '🥳Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = number;

            // HIGH-SCORE

            if (score > high_score) {
                high_score = score;
                document.querySelector('.highscore').textContent = high_score;
            }
        }


        // HIGH
        else if (guess > number) {
            if (score > 0) {
                document.querySelector('.message').textContent = `My number is less than ${guess} `;
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'You Lose 😂'

            }

        }


        // LOW 
        else {
            if (score > 0) {
                document.querySelector('.message').textContent = `My number is greater than ${guess}`;
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'You Lose 😂'
            }
        }
    });