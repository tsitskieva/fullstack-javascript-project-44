#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser  } from '../src/cli.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const brainGcdGame = () => {
    greetUser ();
    console.log('Find the greatest common divisor of given numbers.');

    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${num1} ${num2}`);

    const correctAnswer = gcd(num1, num2);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`Wrong! The correct answer was '${correctAnswer}'.`);
    }
};

brainGcdGame();

