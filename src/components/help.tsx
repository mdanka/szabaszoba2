import "./help.css";

export function Help() {
    return (
        <div className="help-panel">
            You can use the following shortcuts:
            <ul>
                <li><strong>Shift + h</strong> - open/close this help menu</li>
                <li><strong>Shift + t</strong> - start timer</li>
                <li><strong>Shift + s</strong> - stop timer</li>
                <li><strong>Shift + r</strong> - reset timer</li>
            </ul>
        </div>
    );
}
