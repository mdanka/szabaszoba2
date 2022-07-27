import './countdown.css';

export function Countdown(props: { timeRemainingMs: number }) {
    const { timeRemainingMs } = props;
    const minutes = Math.floor(timeRemainingMs / 1000 / 60);
    const seconds = Math.floor(timeRemainingMs % (60 * 1000) / 1000);
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return (
        <>
            <div className="countdown">{minutesString}:{secondsString}</div>
        </>
    );
}
