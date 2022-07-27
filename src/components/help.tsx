import "./help.css";

export function Help() {
    return (
        <div className="help-panel">
            You can use the following shortcuts:
            <ul>
                <li><strong>Shift + h</strong> - open/close this help menu</li>
                <li><strong>Shift + a</strong> - start/stop audio</li>
            </ul>

            <ul>
                <li><strong>Shift + s</strong> - start timer</li>
                <li><strong>Shift + p</strong> - pause timer</li>
                <li><strong>Shift + r</strong> - reset timer</li>
                <li><strong>Shift + q</strong> - -1 minute</li>
                <li><strong>Shift + w</strong> - +1 minute</li>
            </ul>
        </div>
    );
}
