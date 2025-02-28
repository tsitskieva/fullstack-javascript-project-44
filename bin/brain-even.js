#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;

    while (correctAnswers < 3) {
        const randomNumber = Math.floor(Math.random() * 100);
        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
        correctAnswers += 1;
    }

    console.log(`Congratulations, ${name}!`);
};

playEvenGame();