import readlineSync from 'readline-sync';
import { greetUser  } from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const brainCalcGame = () => {
    greetUser ();
    console.log('What is the result of the expression?');

    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const expression = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${expression}`);

    const correctAnswer = eval(expression);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`Wrong! The correct answer was '${correctAnswer}'.`);
    }
};

brainCalcGame();