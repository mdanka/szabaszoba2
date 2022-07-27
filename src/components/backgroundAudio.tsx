export function BackgroundAudio(props: { src: string }) {
    const { src } = props;
    return (
        <audio src={src} autoPlay loop>
            <p>If you are reading this, it is because your browser does not support the audio element.</p>
        </audio>
    );
}
