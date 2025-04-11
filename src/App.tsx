//https://www.youtube.com/watch?v=-ONUyenGnWw

import { useState } from 'react'
import words from "./assets/wordList.json"
import './App.css'
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  
  return (
    <>
      <div className="container">
        <div className="game-result">
          Lose Win
        </div>
        <HangmanDrawing />
        <HangmanWord />
        <div style={{alignSelf: "stretch"}}>
          <Keyboard />
        </div>        
      </div>      
    </>
  )
}

export default App
