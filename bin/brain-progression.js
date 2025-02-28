#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser  } from '../src/cli.js';

const generateProgression = (start, step, length) => {
    return Array.from({ length }, (_, i) => start + i * step);
};

const brainProgressionGame = () => {
    greetUser ();
    console.log('What number is missing in the progression?');

    const start = Math.floor(Math.random() * 10);
    const step = Math.floor(Math.random() * 5) + 1;
    const length = 10;
    const progression = generateProgression(start, step, length);

    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);

    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`Wrong! The correct answer was '${correctAnswer}'.`);
    }
};

brainProgressionGame();