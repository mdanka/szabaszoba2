import { useCallback, useEffect } from 'react';
import useCountDown from 'react-countdown-hook';
import './countdown.css';

const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

export function Countdown() {
    const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);

    // start the timer during the first render
    useEffect(() => {
        start();
    }, []);
    
    const restart = useCallback(() => {
        // you can start existing timer with an arbitrary value
        // if new value is not passed timer will start with initial value
        const newTime = 42 * 1000;
        start(newTime);
    }, []);
    
    return (
        <>
        <div className="countdown">Time left: {timeLeft}</div>
    
        <button onClick={restart}>
            Restart counter with 42 seconds
        </button>
        </>
    );
}
