# Hangman Game in React Native

A classic Hangman (Jogo da Forca) game built with React Native for mobile devices.

## Description

A single-player Hangman game where the player must guess the hidden word by suggesting letters. The goal is to discover the word before reaching the maximum number of mistakes.

## Features

-Random word selection with hints
-Hidden word displayed with underscores
-Tracks correct and incorrect guesses
-Maximum of 6 errors allowed
-Win/Lose alerts with restart option
-Simple and responsive interface

## Technologies Used

-React Native
-React Hooks (useState, useEffect)
-JavaScript (ES6+)
-StyleSheet for styling

## How to Play

1. A random word is chosen and shown as underscores
2. A hint about the word is displayed
3. Type a letter in the input box and press "Verificar"
4. Correct letters are revealed, wrong ones increase the error counter
5. The game ends when:
  -You discover all letters (Victory 🎉)
  -You reach 6 mistakes (Game Over 💀)
6. Use the "Reiniciar" button to play again

## Game Rules

-Only one letter can be typed at a time
-You lose after 6 incorrect guesses
-The game shows alerts for win or loss
-You can always restart after finishing
