import "./Keyboard.css"

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
}

export function Keyboard ({activeLetters, disabled = false, inactiveLetters, addGuessedLetter}: KeyboardProps) {

    const KEYS = (() => {
        return [...Array(26)].map((val, i) => (String.fromCharCode(i + 65)));
    })();

    return (
        <div className="keyboard">
            {KEYS.map(key => {
                const keyValue = key.toLowerCase()
                const isActive = activeLetters.includes(keyValue)
                const isInactive = inactiveLetters.includes(keyValue)
                return (
                    <button onClick = {()=> addGuessedLetter(keyValue)} key={key} className={isActive ? 'keys-button active' : isInactive ? 'keys-button inactive' : 'keys-button' } 
                    disabled={isInactive || isActive || disabled}>{key}</button>
                ) 
            })}
        </div>
    )
}