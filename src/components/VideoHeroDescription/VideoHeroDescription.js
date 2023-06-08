import './VideoHeroDescription.scss';

function VideoHeroDescription(videoIdToDisplay) {
    const { description } = videoIdToDisplay;

    return (
        <div className="video-description">{description}</div>

    )
}

export default VideoHeroDescription