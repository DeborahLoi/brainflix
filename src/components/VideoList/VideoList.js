import './VideoList.scss';
import { Link } from 'react-router-dom';



function VideoList({ videos }) {
 

  return (
   
      <div className="videos-list">
        <h2 className="videos-list__title">NEXT VIDEOS</h2>
        {videos.map(video => (
          <div className="videos__container" key={video.id}>
            <Link to={`/video/${video.id}`}>
                <img className="videos__container--sizing" src={"http://localhost:8080/videos/" + video.image} alt={video.title} />
            </Link>
            <div className="videos__title">
              <h3>{video.title}</h3>
              <p className="videos__channel">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    
  );
}

export default VideoList;
