#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser  } from '../src/cli.js';

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const brainPrimeGame = () => {
    greetUser ();
    console.log('Answer "yes" if the number is prime, otherwise answer "no".');

    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);

    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`Wrong! The correct answer was '${correctAnswer}'.`);
    }
};

brainPrimeGame();