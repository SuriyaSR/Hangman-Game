import "./HangmanWord.css";

export function HangmanWord () {
    const word = "test";
    const guessedLetters = [];
    return (
        <div className="hangman-word">
            {word.split("").map((letter, index) => (
                <span className="word-letter" key={index}>
                    <span style={{visibility : guessedLetters.includes(letter) ? "visible" : "hidden"}}>{letter}</span>
                </span>
            ))}
        </div>
    )
}