import "./help.css";

export function Help(props: { language: "english" | "hungarian" }) {
    const { language } = props;
    return (
        <div className="help-panel">
            Current language: {language}<br />
            <br />
            You can use the following shortcuts:<br />
            <br />
            <strong>Shift + h</strong> - open/close this help menu<br />
            <strong>Shift + a</strong> - toggle audio controls<br />
            <strong>Shift + l</strong> - toggle language<br />
            <br />
            <strong>Shift + s</strong> - start timer<br />
            <strong>Shift + p</strong> - pause timer<br />
            <strong>Shift + r</strong> - reset timer<br />
            <strong>Shift + q</strong> - -1 minute<br />
            <strong>Shift + w</strong> - +1 minute<br />
        </div>
    );
}
