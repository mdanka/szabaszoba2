import { useCallback, useState } from "react"
import "./inputArea.css";

const SOLUTION = "Darium"

const STRINGS = {
    english: {
        buttonText: "Enter",
        inputLabel: "Name of the secret material",
        solutionIncorrect: "That was incorrect 😬",
        solutionCorrect: (
            <span>Correct! ✅<br />Material number <strong>863</strong> is ready.</span>
        ),
    },
    hungarian: {
        buttonText: "Beküld",
        inputLabel: "A titkos anyag neve",
        solutionIncorrect: "Helytelen 😬",
        solutionCorrect: (
            <span>Helyes! ✅<br />A <strong>863</strong>-as számú anyag készenlétben.</span>
        ),
    },
} as const;

export function InputArea(props: { language: "english" | "hungarian" }) {
    const { language } = props;

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
                placeholder={STRINGS[language].inputLabel}
                value={value}
                onChange={onChange}
            />
            <button className="input-area-button" onClick={onSubmit}>{STRINGS[language].buttonText}</button>
            <div className="input-area-info">
                {isCorrect === true && STRINGS[language].solutionCorrect}
                {isCorrect === false && (
                    <span>{STRINGS[language].solutionIncorrect}</span>
                )}
            </div>
        </div>
    )
}
