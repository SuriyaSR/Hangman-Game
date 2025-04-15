import "./HangmanWord.css";

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}
export function HangmanWord ({guessedLetters, wordToGuess, reveal = false}:HangmanWordProps) {
   
    return (
        <div className="hangman-word">
            {wordToGuess.split("").map((letter, index) => (
                <span className="word-letter" key={index}>
                    <span style={{visibility : guessedLetters.includes(letter) || reveal ? "visible" : "hidden", color: (!guessedLetters.includes(letter) && reveal ? "red" : "black")}}>{letter}</span>
                </span>
            ))}
        </div>
    )
}