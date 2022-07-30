import { useCallback, useState } from "react"
import "./inputArea.css";

const SOLUTION = "Surgut"

export function InputArea() {
    const [value, setValue] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [])

    const onSubmit = useCallback(() => {
        const isSubmissionCorrect = value.toLowerCase().trim() === SOLUTION.toLowerCase().trim();
        setIsCorrect(isSubmissionCorrect);
    }, [value])

    return(
        <div className="input-area">
            <input
                className="input-area-field"
                type="text"
                placeholder="A titkos bázis neve"
                value={value}
                onChange={onChange}
            />
            <button className="input-area-button" onClick={onSubmit}>💣</button>
            <div className="input-area-info">
                {isCorrect === true && (
                    <span>A bázis sikeresen felrobbantva! 💥<br />A következő kód: 863</span>
                )}
                {isCorrect === false && (
                    <span>Rossz bázist sikerült felrobbantani 😬</span>
                )}
            </div>
        </div>
    )
}
