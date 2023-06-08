import './VideoHeroItems.scss';
import ViewsIcon from '../../assets/Icons/views.svg';
import LikesIcon from '../../assets/Icons/likes.svg';

function VideoHeroItems(videoIdToDisplay) {
  
  const { title, channel, timestamp, views, likes } = videoIdToDisplay;
  const date = new Date(timestamp);
  const formattedTimestamp = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <>
      <h1 className="hero__title">{title}</h1>
      <div className="video-details" >
        <div className="video-details--display" >
          <h4 className="video-details--padding">By {channel}</h4>
          <p className="video-details--padding video-details--color">{formattedTimestamp}</p>
        </div>
        <div className="likes-views video-details--display">
          <div className="video-details--padding video-details--color "><img src={ViewsIcon} alt="Views Icon" />  {views}</div>
          <div className="video-details--padding video-details--color "><img src={LikesIcon} alt="Likes Icon" />  {likes}</div>
        </div>
      </div>
    </>
  );
}

export default VideoHeroItems;
