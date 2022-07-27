import './backgroundVideo.css';

export function BackgroundVideo(props: { src: string }) {
    const { src } = props;
    return (
        <video autoPlay muted loop className="background-video">
            <source src={src} type="video/mp4" />
        </video>
    )
}
