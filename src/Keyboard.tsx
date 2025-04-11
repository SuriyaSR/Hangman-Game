import "./Keyboard.css"

export function Keyboard () {

    const KEYS = (() => {
        return [...Array(26)].map((val, i) => (String.fromCharCode(i + 65)));
    })();

    return (
        <div className="keyboard">
            {KEYS.map(key => {
                return (
                    <button key={key} className="keys-button">{key}</button>
                )
            })}
        </div>
    )
}