export function BackgroundAudio(props: { src: string; isControlShown: boolean }) {
    const { src, isControlShown } = props;
    return (
        <audio src={src} autoPlay loop controls={isControlShown}>
            <p>If you are reading this, it is because your browser does not support the audio element.</p>
        </audio>
    );
}
